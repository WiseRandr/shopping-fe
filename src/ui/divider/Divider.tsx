interface IProps {
  height?: number;
}

export function Divider({ height = 5 }: IProps) {
  return <div className="bg-gradient-to-r from-lime-300 via-lime-200 to-lime-300" style={{ height }} />
}