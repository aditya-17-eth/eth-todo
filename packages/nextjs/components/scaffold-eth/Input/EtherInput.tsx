import { CommonInputProps, InputBase } from "~~/components/scaffold-eth";

/**
 * Input for ETH amount.
 *
 * onChange will always be called with the value in ETH
 */
export const EtherInput = ({ value, name, placeholder, onChange, disabled }: CommonInputProps) => {
  return (
    <InputBase
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      disabled={disabled}
      prefix={<span className="pl-4 -mr-2 text-accent self-center">{"Ξ"}</span>}
    />
  );
};
