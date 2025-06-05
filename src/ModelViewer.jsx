// src/ModelViewer.jsx
import { useEffect } from 'react';

export default function ModelViewer() {
  useEffect(() => {
    import('@google/model-viewer'); // Import dinámico para web components
  }, []);

  return (
    <model-viewer
  src={productoDetalle.modelo}
  alt={productoDetalle.nombre}
  auto-rotate
  camera-controls
  ar
  style={{ width: '100%', height: '320px' }}
  className="bg-gray-50 rounded-lg"
/>
  );
}
