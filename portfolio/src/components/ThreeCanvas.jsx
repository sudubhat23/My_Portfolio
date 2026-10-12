import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { Sparkles, RefreshCw } from 'lucide-react'

export default function ThreeCanvas() {
  const containerRef = useRef(null)
  const [currentShape, setCurrentShape] = useState('knot') // 'knot' | 'icosahedron' | 'sphere'
  const shapeRef = useRef(currentShape)
  shapeRef.current = currentShape

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Scene setup
    const scene = new THREE.Scene()

    // Camera
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    )
    camera.position.z = 5.5

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7)
    scene.add(ambientLight)

    const pointLight1 = new THREE.PointLight(0xa855f7, 3, 50)
    pointLight1.position.set(5, 5, 5)
    scene.add(pointLight1)

    const pointLight2 = new THREE.PointLight(0x06b6d4, 3, 50)
    pointLight2.position.set(-5, -5, 3)
    scene.add(pointLight2)

    // Geometries definition
    const materials = {
      solid: new THREE.MeshStandardMaterial({
        color: 0x181035,
        roughness: 0.25,
        metalness: 0.85,
        wireframe: false,
      }),
      wireframe: new THREE.MeshBasicMaterial({
        color: 0xa855f7,
        wireframe: true,
        transparent: true,
        opacity: 0.35,
      }),
      cyanWire: new THREE.MeshBasicMaterial({
        color: 0x38bdf8,
        wireframe: true,
        transparent: true,
        opacity: 0.45,
      }),
    }

    const group = new THREE.Group()
    scene.add(group)

    // Function to build the 3D meshes based on active shape
    const buildMesh = (type) => {
      // Clear previous children
      while (group.children.length > 0) {
        const obj = group.children[0]
        group.remove(obj)
        if (obj.geometry) obj.geometry.dispose()
      }

      let innerGeo, outerGeo
      if (type === 'knot') {
        innerGeo = new THREE.TorusKnotGeometry(1.0, 0.32, 128, 32, 2, 3)
        outerGeo = new THREE.TorusKnotGeometry(1.05, 0.34, 64, 16, 2, 3)
      } else if (type === 'icosahedron') {
        innerGeo = new THREE.IcosahedronGeometry(1.4, 1)
        outerGeo = new THREE.IcosahedronGeometry(1.48, 1)
      } else {
        innerGeo = new THREE.SphereGeometry(1.3, 32, 32)
        outerGeo = new THREE.SphereGeometry(1.36, 16, 16)
      }

      const innerMesh = new THREE.Mesh(innerGeo, materials.solid)
      const outerMesh = new THREE.Mesh(outerGeo, materials.cyanWire)
      
      group.add(innerMesh)
      group.add(outerMesh)
    }

    buildMesh(shapeRef.current)

    // Floating Particles / Starfield
    const particlesCount = 200
    const positions = new Float32Array(particlesCount * 3)
    const particleColors = new Float32Array(particlesCount * 3)

    for (let i = 0; i < particlesCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8

      // Mix between purple and cyan
      if (Math.random() > 0.5) {
        particleColors[i * 3] = 0.65     // R
        particleColors[i * 3 + 1] = 0.33 // G
        particleColors[i * 3 + 2] = 0.97 // B
      } else {
        particleColors[i * 3] = 0.22
        particleColors[i * 3 + 1] = 0.74
        particleColors[i * 3 + 2] = 0.97
      }
    }

    const particleGeometry = new THREE.BufferGeometry()
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3))

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
    })

    const particleSystem = new THREE.Points(particleGeometry, particleMaterial)
    scene.add(particleSystem)

    // Mouse & Touch interaction tracking
    let targetRotationX = 0
    let targetRotationY = 0
    let isDragging = false
    let previousPointerX = 0
    let previousPointerY = 0

    const handlePointerMove = (e) => {
      const rect = container.getBoundingClientRect()
      const clientX = e.clientX ?? (e.touches && e.touches[0]?.clientX)
      const clientY = e.clientY ?? (e.touches && e.touches[0]?.clientY)

      if (clientX !== undefined && clientY !== undefined) {
        const normalizedX = ((clientX - rect.left) / rect.width) * 2 - 1
        const normalizedY = -(((clientY - rect.top) / rect.height) * 2 - 1)

        targetRotationY = normalizedX * 0.9
        targetRotationX = -normalizedY * 0.9
      }
    }

    const handleTouchStart = (e) => {
      isDragging = true
      previousPointerX = e.touches[0].clientX
      previousPointerY = e.touches[0].clientY
    }

    const handleTouchMove = (e) => {
      if (!isDragging) return
      const deltaX = e.touches[0].clientX - previousPointerX
      const deltaY = e.touches[0].clientY - previousPointerY
      group.rotation.y += deltaX * 0.008
      group.rotation.x += deltaY * 0.008
      previousPointerX = e.touches[0].clientX
      previousPointerY = e.touches[0].clientY
    }

    const handleTouchEnd = () => {
      isDragging = false
    }

    window.addEventListener('mousemove', handlePointerMove)
    container.addEventListener('touchstart', handleTouchStart, { passive: true })
    container.addEventListener('touchmove', handleTouchMove, { passive: true })
    container.addEventListener('touchend', handleTouchEnd)

    // Resize handler
    const handleResize = () => {
      if (!container) return
      const width = container.clientWidth
      const height = container.clientHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }

    window.addEventListener('resize', handleResize)

    // Animation Loop
    let animationFrameId
    let clock = new THREE.Clock()

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)

      const elapsedTime = clock.getElapsedTime()

      // Automatic gentle rotation
      group.rotation.y += 0.005
      group.rotation.x += 0.003

      // Smooth interpolation toward target pointer rotation
      group.rotation.y += (targetRotationY - group.rotation.y) * 0.03
      group.rotation.x += (targetRotationX - group.rotation.x) * 0.03

      // Floating wave motion
      group.position.y = Math.sin(elapsedTime * 1.5) * 0.12

      // Rotate particle field
      particleSystem.rotation.y = elapsedTime * 0.02
      particleSystem.rotation.x = elapsedTime * 0.01

      renderer.render(scene, camera)
    }

    animate()

    // Expose rebuild method
    container._rebuildMesh = buildMesh

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('mousemove', handlePointerMove)
      window.removeEventListener('resize', handleResize)
      container.removeEventListener('touchstart', handleTouchStart)
      container.removeEventListener('touchmove', handleTouchMove)
      container.removeEventListener('touchend', handleTouchEnd)

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
      renderer.dispose()
      scene.clear()
    }
  }, [])

  // Handle shape change
  const cycleShape = () => {
    const shapes = ['knot', 'icosahedron', 'sphere']
    const nextIndex = (shapes.indexOf(currentShape) + 1) % shapes.length
    const next = shapes[nextIndex]
    setCurrentShape(next)
    if (containerRef.current?._rebuildMesh) {
      containerRef.current._rebuildMesh(next)
    }
  }

  return (
    <div className="relative w-full h-[380px] sm:h-[450px] lg:h-[520px] flex items-center justify-center">
      {/* 3D Canvas element */}
      <div 
        ref={containerRef} 
        className="w-full h-full cursor-grab active:cursor-grabbing select-none"
        title="Interactive 3D Canvas - Move cursor or drag on mobile"
      />

      {/* Floating 3D Badge & Control */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-[#0d0f1f]/80 backdrop-blur-md border border-purple-500/25 px-3 py-1.5 rounded-full text-xs text-purple-300 shadow-lg shadow-purple-900/30">
        <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin" style={{ animationDuration: '6s' }} />
        <span className="font-mono text-[11px] hidden sm:inline text-gray-300">3D Interactive</span>
        <button
          onClick={cycleShape}
          className="flex items-center gap-1.5 bg-purple-600/40 hover:bg-purple-600/80 text-white px-2.5 py-0.5 rounded-full font-medium transition-colors"
          title="Switch 3D Geometry"
        >
          <RefreshCw className="w-3 h-3 text-cyan-300" />
          <span className="capitalize">{currentShape === 'knot' ? 'Quantum Knot' : currentShape === 'icosahedron' ? 'Crystal' : 'Neural Sphere'}</span>
        </button>
      </div>
    </div>
  )
}
