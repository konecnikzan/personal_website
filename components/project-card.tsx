'use client'

import { XIcon } from 'lucide-react'
import { Spotlight } from '@/components/ui/spotlight'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogTitle,
  MorphingDialogSubtitle,
  MorphingDialogDescription,
  MorphingDialogImage,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog'

import type { Project } from '@/app/data'

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
     return (
       <MorphingDialog
         transition={{
           type: 'spring',
           bounce: 0.05,
           duration: 0.25,
         }}
       >
         {/* Outer wrapper – no transition on close */}
         <div
           className="
             relative overflow-hidden rounded-2xl
             bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30
             isolate
             w-full max-w-[480px] mx-auto
             min-h-[300px]
             flex flex-col
             group
           "
         >
           {/* Spotlight */}
           <Spotlight
             className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50 pointer-events-none"
             size={64}
           />
   
           {/* Trigger – minimal transition */}
           <MorphingDialogTrigger
             style={{ borderRadius: '15px' }}
             className="
               flex flex-col w-full h-full
               bg-white dark:bg-zinc-950
             "
           >
             <div className="flex flex-col flex-grow p-1">
               {/* Image zoom – pure CSS, no Framer Motion */}
               <div className="overflow-hidden rounded-t-[14px]">
                 <div className="
                   h-48 w-full origin-top
                   transition-transform duration-500 ease-out
                   group-hover:scale-110
                 ">
                   <MorphingDialogImage
                     src={project.image}
                     alt={`Preview of ${project.name}`}
                     className="h-full w-full object-cover"
                   />
                 </div>
               </div>
   
               {/* Text area – no hover transition */}
               <div className="flex flex-col flex-grow px-3 pt-2 pb-3 justify-between">
                 <div>
                   <MorphingDialogTitle className="text-zinc-950 dark:text-zinc-50">
                     {project.name}
                   </MorphingDialogTitle>
                   <MorphingDialogSubtitle className="text-zinc-700 dark:text-zinc-400">
                     {project.shortDescription}
                   </MorphingDialogSubtitle>
                 </div>
               </div>
             </div>
           </MorphingDialogTrigger>
         </div>
   
         {/* Dialog */}
         <MorphingDialogContainer>
           <MorphingDialogContent
             style={{ borderRadius: '24px' }}
             className="
               pointer-events-auto relative flex flex-col overflow-hidden
               border border-zinc-950/10 bg-white 
               dark:border-zinc-50/10 dark:bg-zinc-900 
               max-w-[90vw] sm:max-w-[480px] md:max-w-[520px] lg:max-w-[580px] xl:max-w-[620px]
               max-h-[90vh] sm:max-h-[85vh]
             "
           >
             {/* Fixed top: image */}
             <div className="shrink-0">
               <div 
                 className="
                   relative w-full overflow-hidden 
                   bg-zinc-100 dark:bg-zinc-800
                   aspect-[4/3] sm:aspect-[16/9]
                 "
               >
                 <MorphingDialogImage
                   src={project.image}
                   alt={`Preview of ${project.name}`}
                   className="absolute inset-0 h-full w-full object-cover object-center"
                 />
               </div>
             </div>
   
             {/* Fixed header */}
             <div className="shrink-0 px-5 pt-5 pb-4 sm:px-6 sm:pt-6 sm:pb-5 border-b border-zinc-200 dark:border-zinc-800">
               <MorphingDialogTitle className="text-xl sm:text-2xl text-zinc-950 dark:text-zinc-50">
                 {project.name}
               </MorphingDialogTitle>
   
               <MorphingDialogSubtitle className="mt-1.5 text-zinc-700 dark:text-zinc-400">
                 {project.shortDescription}
               </MorphingDialogSubtitle>
             </div>
   
             {/* Scrollable content */}
             <div className="flex-1 min-h-0 overflow-y-auto px-5 py-6 sm:px-6 sm:py-8 scrollbar-thin scrollbar-thumb-zinc-300 dark:scrollbar-thumb-zinc-600 scrollbar-track-transparent">
               <MorphingDialogDescription
                 disableLayoutAnimation  // ← important: disables extra Framer layout anim
                 variants={{
                   initial: { opacity: 0, scale: 0.8, y: 60 },
                   animate: { opacity: 1, scale: 1, y: 0 },
                   exit: { opacity: 0, scale: 0.8, y: 60 },
                 }}
               >
                 <div 
                   className="
                     space-y-5 sm:space-y-7 
                     text-sm sm:text-base 
                     text-zinc-600 dark:text-zinc-300 
                     leading-relaxed 
                     whitespace-pre-line
                   "
                 >
                   {project.fullDescription}
                 </div>
               </MorphingDialogDescription>
             </div>
   
             {/* Fixed bottom */}
             <div className="
               shrink-0 border-t border-zinc-200 dark:border-zinc-800 
               bg-white dark:bg-zinc-900 px-5 py-4 sm:px-6 sm:py-5
             ">
               <a
                 href={project.link}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="
                   inline-flex items-center justify-center w-full gap-2 
                   rounded-lg bg-zinc-900 px-6 py-3 text-sm font-medium text-white 
                   hover:bg-zinc-800 transition-colors
                   dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-zinc-200
                 "
               >
                 Visit Project →
               </a>
             </div>
   
             {/* Close button */}
             <MorphingDialogClose 
               className="
                 absolute top-3 right-3 sm:top-4 sm:right-4 
                 rounded-full bg-white/90 p-2 
                 text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 
                 transition-colors backdrop-blur-sm shadow-sm
                 dark:bg-zinc-800/90 dark:text-zinc-300 dark:hover:bg-zinc-700 dark:hover:text-zinc-100
                 z-10
               "
             >
               <XIcon size={16} />
             </MorphingDialogClose>
           </MorphingDialogContent>
         </MorphingDialogContainer>
       </MorphingDialog>
     )
   }