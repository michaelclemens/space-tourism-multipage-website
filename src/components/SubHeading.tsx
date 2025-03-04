export default function SubHeading({ number, text }: { number: number; text: string }) {
  return (
    <h1 className="text-preset-6-mobile md:text-preset-5 mb-300 text-center text-white uppercase md:text-left">
      <span className="mr-300 opacity-25">{number.toString().padStart(2, '0')}</span>
      {text}
    </h1>
  )
}
