import type { UploadProps } from '../interface';

export const successRequest: UploadProps['customRequest'] = ({ onSuccess, file }) => {
  setTimeout(() => {
    // @ts-expect-error fix it later
    onSuccess?.(null, file);
  });
};

export const errorRequest: UploadProps['customRequest'] = ({ onError }) => {
  setTimeout(() => {
    // @ts-expect-error fix it later
    onError?.();
  });
};
