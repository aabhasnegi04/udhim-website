"use client"

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react"
import { Play, Check, ExternalLink, Sparkles, ChevronLeft, ChevronRight, Image as ImageIcon, Video } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface MediaItem {
  type: "image" | "video"
  url: string
  thumbnail?: string
  title: string
}

interface Product {
  id: string
  name: string
  tagline: string
  description: string
  icon: LucideIcon
  color: string
  features: string[]
  stats: Array<{ label: string; value: string }>
  media: MediaItem[]
}

interface ProductShowcaseProps {
  product: Product
  index: number
}

export default function ProductShowcase({ product, index }: ProductShowcaseProps) {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const isEven = index % 2 === 0
  const currentMedia = product.media[currentMediaIndex]

  const nextMedia = () => {
    setCurrentMediaIndex((prev) => (prev + 1) % product.media.length)
    setIsVideoPlaying(false)
  }

  const prevMedia = () => {
    setCurrentMediaIndex((prev) => (prev - 1 + product.media.length) % product.media.length)
    setIsVideoPlaying(false)
  }

  const goToMedia = (index: number) => {
    setCurrentMediaIndex(index)
    setIsVideoPlaying(false)
  }

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      className="relative"
    >
      <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
        {/* Content Side */}
        <motion.div
          initial={{ opacity: 0, x: isEven ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`${!isEven ? 'lg:order-2' : ''}`}
        >
          {/* Icon & Title */}
          <div className="flex items-start gap-4 mb-6">
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
              className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center shadow-xl`}
            >
              <product.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
            </motion.div>
            
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                {product.name}
              </h2>
              <p className={`text-lg font-semibold bg-gradient-to-r ${product.color} bg-clip-text text-transparent`}>
                {product.tagline}
              </p>
            </div>
          </div>

          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            {product.description}
          </p>

          {/* Features Grid */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className={`w-5 h-5 bg-gradient-to-r ${product.color} bg-clip-text text-transparent`} />
              <h3 className="text-xl font-bold text-gray-900">Key Features</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {product.features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3 group"
                >
                  <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${product.color} flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform`}>
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-gray-700 text-sm font-medium leading-tight">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {product.stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-all"
              >
                <div className={`text-2xl font-bold bg-gradient-to-r ${product.color} bg-clip-text text-transparent mb-1`}>
                  {stat.value}
                </div>
                <div className="text-xs text-gray-600 font-medium leading-tight">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=nilesh@udhim.com&su=Demo%20Request%20for%20Udhim%20Technology%20Solutions&body=Hi%2C%0A%0AI%20would%20like%20to%20schedule%20a%20demo%20of%20your%20ERP%2C%20CRM%20and%20Dashboard%20solutions.%0A%0APlease%20let%20me%20know%20your%20available%20time%20slots.%0A%0AThank%20you."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${product.color} text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all`}
          >
            Request Demo
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>

        {/* Visual Side - Screenshot/Video */}
        <motion.div
          style={{ y: isEven ? y : undefined }}
          initial={{ opacity: 0, x: isEven ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`relative ${!isEven ? 'lg:order-1' : ''}`}
        >
          <div className="relative group">
            {/* Decorative background */}
            <div className={`absolute -inset-4 bg-gradient-to-br ${product.color} opacity-20 blur-2xl rounded-3xl group-hover:opacity-30 transition-opacity`} />
            
            {/* Main container */}
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
              {/* Browser chrome */}
              <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b border-gray-200">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 mx-4 bg-white rounded px-3 py-1 text-xs text-gray-500 font-mono">
                  app.udhim.com/{product.id}
                </div>
              </div>

              {/* Screenshot/Video area */}
              <div className="relative aspect-video bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentMediaIndex}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                  >
                    {currentMedia.type === "image" ? (
                      <>
                        {/* Image placeholder */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className={`text-center p-8 bg-gradient-to-br ${product.color} bg-opacity-10 rounded-2xl`}>
                            <product.icon className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-br ${product.color} bg-clip-text text-transparent opacity-50`} />
                            <p className="text-sm text-gray-500 font-medium">
                              {currentMedia.title}
                            </p>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        {!isVideoPlaying ? (
                          <>
                            {/* Video thumbnail */}
                            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                              <div className="text-center">
                                <Video className={`w-20 h-20 mx-auto mb-4 text-white opacity-50`} />
                                <p className="text-sm text-white/70 font-medium">
                                  {currentMedia.title}
                                </p>
                              </div>
                            </div>

                            {/* Play button overlay */}
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => setIsVideoPlaying(true)}
                              className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-all group/play"
                            >
                              <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${product.color} flex items-center justify-center shadow-2xl group-hover/play:scale-110 transition-transform`}>
                                <Play className="w-8 h-8 text-white ml-1" fill="white" />
                              </div>
                            </motion.button>
                          </>
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                            <div className="text-center">
                              <p className="text-white text-sm mb-2">Video Player</p>
                              <p className="text-white/60 text-xs">{currentMedia.url}</p>
                              <button
                                onClick={() => setIsVideoPlaying(false)}
                                className="mt-4 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg text-sm"
                              >
                                Close
                              </button>
                            </div>
                          </div>
                        )}
                      </>
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* Navigation arrows */}
                {product.media.length > 1 && (
                  <>
                    <button
                      onClick={prevMedia}
                      className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-all hover:scale-110 z-10"
                    >
                      <ChevronLeft className="w-5 h-5 text-gray-700" />
                    </button>
                    <button
                      onClick={nextMedia}
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-all hover:scale-110 z-10"
                    >
                      <ChevronRight className="w-5 h-5 text-gray-700" />
                    </button>
                  </>
                )}

                {/* Media counter */}
                {product.media.length > 1 && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full text-white text-xs font-medium z-10">
                    {currentMediaIndex + 1} / {product.media.length}
                  </div>
                )}
              </div>

              {/* Thumbnail carousel */}
              {product.media.length > 1 && (
                <div className="p-3 bg-gradient-to-r from-gray-50 to-white border-t border-gray-100">
                  <div className="flex gap-2 overflow-x-auto pb-1">
                    {product.media.map((media, idx) => (
                      <button
                        key={idx}
                        onClick={() => goToMedia(idx)}
                        className={`flex-shrink-0 w-16 h-12 rounded-lg border-2 transition-all overflow-hidden ${
                          idx === currentMediaIndex
                            ? `border-transparent ring-2 ring-offset-2 bg-gradient-to-br ${product.color}`
                            : "border-gray-200 hover:border-gray-300 bg-gray-100"
                        }`}
                      >
                        <div className="w-full h-full flex items-center justify-center">
                          {media.type === "image" ? (
                            <ImageIcon className={`w-4 h-4 ${idx === currentMediaIndex ? "text-white" : "text-gray-400"}`} />
                          ) : (
                            <Video className={`w-4 h-4 ${idx === currentMediaIndex ? "text-white" : "text-gray-400"}`} />
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Feature highlights */}
              <div className="p-4 bg-gradient-to-r from-gray-50 to-white border-t border-gray-100">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1 text-gray-600">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      Live Demo Available
                    </span>
                    <span className="text-gray-400">|</span>
                    <span className="text-gray-600 font-medium">
                      {currentMedia.type === "video" ? "Video Demo" : "Screenshot"}
                    </span>
                  </div>
                  <span className={`font-semibold bg-gradient-to-r ${product.color} bg-clip-text text-transparent`}>
                    {currentMediaIndex + 1}/{product.media.length}
                  </span>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-xl p-3 border border-gray-100"
            >
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full bg-gradient-to-br ${product.color}`} />
                <span className="text-sm font-bold text-gray-900">Production Ready</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
