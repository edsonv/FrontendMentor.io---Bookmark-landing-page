
export const ArrowIcon = ({stroke = "#5267DF",width = "18", height = "12", className = "" }: { stroke?: string, width?: string, height?: string, className?: string}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} className={className}><path fill="none" stroke={stroke} strokeWidth="3" d="M1 1l8 8 8-8"/></svg>
  )
}
