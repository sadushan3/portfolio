import { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  layer: number;
  pulse: number;
  pulseSpeed: number;
  color: string;
  connections: number[];
  signalProgress: number[];
  signalActive: boolean[];
}

interface NeuralNetworkCanvasProps {
  className?: string;
  nodeCount?: number;
  interactive?: boolean;
}

const COLORS = ['#00E5FF', '#7B61FF', '#00FFB3'];

export function NeuralNetworkCanvas({
  className = '',
  nodeCount = 60,
  interactive = true,
}: NeuralNetworkCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const animFrameRef = useRef<number>(0);
  const nodesRef = useRef<Node[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initNodes();
    };

    const initNodes = () => {
      const w = canvas.width;
      const h = canvas.height;
      const layers = 5;
      const nodes: Node[] = [];

      for (let i = 0; i < nodeCount; i++) {
        const layer = Math.floor(Math.random() * layers);
        nodes.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: Math.random() * 3 + 2,
          layer,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: Math.random() * 0.02 + 0.01,
          color: COLORS[layer % COLORS.length],
          connections: [],
          signalProgress: [],
          signalActive: [],
        });
      }

      // Build connections — prefer same/adjacent layer nodes within range
      const maxDist = Math.min(w, h) * 0.28;
      for (let i = 0; i < nodes.length; i++) {
        nodes[i].connections = [];
        nodes[i].signalProgress = [];
        nodes[i].signalActive = [];
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            nodes[i].connections.push(j);
            nodes[i].signalProgress.push(0);
            nodes[i].signalActive.push(false);
          }
        }
      }

      nodesRef.current = nodes;

      // Kick off random signals
      setInterval(() => {
        const ns = nodesRef.current;
        const src = Math.floor(Math.random() * ns.length);
        if (ns[src].connections.length > 0) {
          const ci = Math.floor(Math.random() * ns[src].connections.length);
          ns[src].signalActive[ci] = true;
          ns[src].signalProgress[ci] = 0;
        }
      }, 300);
    };

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      const nodes = nodesRef.current;
      const mouse = mouseRef.current;
      const maxDist = Math.min(w, h) * 0.28;

      // Update positions
      for (const n of nodes) {
        n.pulse += n.pulseSpeed;

        // Gentle float
        n.x += n.vx;
        n.y += n.vy;

        // Bounce
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;

        // Mouse repulsion
        if (interactive) {
          const dx = n.x - mouse.x;
          const dy = n.y - mouse.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 120 && d > 0) {
            const force = (120 - d) / 120;
            n.x += (dx / d) * force * 2;
            n.y += (dy / d) * force * 2;
          }
        }
      }

      // Draw edges + signals
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let ci = 0; ci < a.connections.length; ci++) {
          const j = a.connections[ci];
          const b = nodes[j];

          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist > maxDist) continue;

          const alpha = (1 - dist / maxDist) * 0.25;

          // Edge gradient
          const grad = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
          grad.addColorStop(0, a.color + Math.round(alpha * 255).toString(16).padStart(2, '0'));
          grad.addColorStop(1, b.color + Math.round(alpha * 255).toString(16).padStart(2, '0'));

          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = grad;
          ctx.lineWidth = 0.8;
          ctx.stroke();

          // Signal pulse along edge
          if (a.signalActive[ci]) {
            a.signalProgress[ci] += 0.018;
            if (a.signalProgress[ci] >= 1) {
              a.signalActive[ci] = false;
              a.signalProgress[ci] = 0;
              // Cascade to b's connections
              if (b.connections.length > 0) {
                const next = Math.floor(Math.random() * b.connections.length);
                b.signalActive[next] = true;
                b.signalProgress[next] = 0;
              }
            }

            const sx = a.x + dx * a.signalProgress[ci];
            const sy = a.y + dy * a.signalProgress[ci];

            const signalGrad = ctx.createRadialGradient(sx, sy, 0, sx, sy, 6);
            signalGrad.addColorStop(0, a.color + 'ff');
            signalGrad.addColorStop(1, a.color + '00');

            ctx.beginPath();
            ctx.arc(sx, sy, 6, 0, Math.PI * 2);
            ctx.fillStyle = signalGrad;
            ctx.fill();
          }
        }
      }

      // Draw nodes
      for (const n of nodes) {
        const pulseScale = 1 + Math.sin(n.pulse) * 0.3;
        const r = n.radius * pulseScale;
        const glow = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, r * 4);
        glow.addColorStop(0, n.color + 'cc');
        glow.addColorStop(0.4, n.color + '44');
        glow.addColorStop(1, n.color + '00');

        // Glow halo
        ctx.beginPath();
        ctx.arc(n.x, n.y, r * 4, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx.fillStyle = n.color;
        ctx.fill();

        // Inner bright spot
        ctx.beginPath();
        ctx.arc(n.x - r * 0.25, n.y - r * 0.25, r * 0.35, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255,255,255,0.7)';
        ctx.fill();
      }

      animFrameRef.current = requestAnimationFrame(draw);
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    const onMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };

    window.addEventListener('resize', resize);
    if (interactive) {
      canvas.addEventListener('mousemove', onMouseMove);
      canvas.addEventListener('mouseleave', onMouseLeave);
    }

    resize();
    draw();

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [nodeCount, interactive]);

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full ${className}`}
      style={{ display: 'block' }}
    />
  );
}
