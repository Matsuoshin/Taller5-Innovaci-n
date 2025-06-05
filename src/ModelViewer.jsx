// src/ModelViewer.jsx
import { useEffect } from 'react';

export default function ModelViewer({ productoDetalle }) {
  useEffect(() => {
    import('@google/model-viewer'); // Import dinámico para web components
  }, []);

  if (!productoDetalle) return null;

  return (
    <model-viewer
      src={productoDetalle.modelo}
      alt={productoDetalle.nombre}
      auto-rotate
      camera-controls
      ar
      ar-modes="scene-viewer webxr quick-look"
      style={{ width: '100%', height: '320px' }}
      className="bg-gray-50 rounded-lg"
    />
  );
}
