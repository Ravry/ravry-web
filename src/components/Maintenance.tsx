interface Props {
  message : string;
}

export default function Maintenance({ message }: Props) {  
  return (
    <h1>{ message }</h1>
  )
}