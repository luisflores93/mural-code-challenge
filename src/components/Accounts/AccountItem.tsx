interface AccountItemProps {
  label: string;
  value: string;
}

export const AccountItem = ({ value, label }: AccountItemProps) => {
  return (
    <div className="flex items-center justify-between">
      <span className="font-bold">{label}:</span>
      <span>{value}</span>
    </div>
  );
};
