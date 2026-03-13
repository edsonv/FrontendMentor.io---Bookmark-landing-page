import cn from "clsx"

export const BgPill = ({direction = "right"}: {direction?:string}) => {
  return (
    <div className={cn("bg-blue-600 h-[203px] md:h-44 w-62.5 md:w-125 absolute rounded-full md:rounded-[175px] -z-10", direction === "right" ? "-right-24.5 md:right-0 md:left-[253px] xl:left-15.25 bottom-0.25 md:-bottom-[15px] xl:-bottom-5.75" : "-left-27.75 md:-left-48.75 -bottom-4.25 md:-bottom-10.75")}></div>
  )
}
