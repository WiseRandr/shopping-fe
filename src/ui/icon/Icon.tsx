interface IProps {
  name: string;
}

export function Icon({ name }: IProps) {
  return <span className="material-symbols-outlined">{name}</span>
}