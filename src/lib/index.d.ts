interface AlertController {
  showLoading: () => void;
}

interface AlertOption {
  title?: string;
  content: string;
  type?: 'success' | 'warning' | 'error' | 'info' | 'normal';
  okText?: string;
  cancelText?: string;
  closeOnClickOverlay?: boolean;
  beforeClose?: (action: string, controller: AlertController, done: () => void) => void;
}

export declare function alert(content: string | AlertOption): Promise<string>;

interface MessageOption {
  content: string;
  duration?: number;
  type?: 'success' | 'warning' | 'error' | 'info' | 'normal' | 'loading';
}

export const message: {
  (content: string | MessageOption): number;
  success(content: string): number;
  warning(content: string): number;
  error(content: string): number;
  info(content: string): number;
  normal(content: string): number;
  loading(content: string): number;
  clear(id?: number): void;
}
