import { memo } from 'react';

interface FieldLabelProps {
  title: string;
  required?: boolean;
}

const FieldLabel = (props: FieldLabelProps) => {
  const { title, required } = props;

  return (
    <p>
      {required && <span className="text-red-600 mr-2">*</span>}
      <span className="font-semibold">{title}</span>
    </p>
  );
};

export default memo(FieldLabel);
