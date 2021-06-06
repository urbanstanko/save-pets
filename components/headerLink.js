import Link from 'next/link'

export default function HeaderLink({ linkName, name, selected, onClickFunction, children }) {
  return (
    <Link href={"/" + linkName}>
      <a className={`px-2 text-cookie-dark hover:underline ${ selected === linkName ? "font-bold" : ""}`}>{ name }</a>
    </Link>
  )
  // // TODO mogoce morm prevert, ce sploh obstaja onClickFunction
  // return <button className={`px-2 ${ selected ? "font-bold" : "" }`} onClick={ onClickFunction }>
  //   {children}
  //   </button>;
}
