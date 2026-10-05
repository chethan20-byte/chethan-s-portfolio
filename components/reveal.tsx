export function Reveal({children,className='',delay=0}:{children:React.ReactNode,className?:string,delay?:number}){
  return <div className={`reveal ${className}`} style={{'--reveal-delay':`${delay}s`} as React.CSSProperties}>{children}</div>
}
