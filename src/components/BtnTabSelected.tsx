import cn from 'clsx';

export const BtnTabSelected = ({ isActive }: {isActive: boolean}) => {
  return (
    <div className={cn('absolute bottom-0 w-full left-1/2 -translate-x-1/2 h-0.5 bg-red-400', !isActive && "hidden")}></div>
  )
}
