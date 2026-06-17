import { toast } from "react-toastify";

export const showSuccessToast = (message: string) => {
  toast.success(message, {
    style: {
      background: "#198754",
      color: "#fff",
      textAlign: "center",
    },
  });
};

export const showErrorToast = (message: string) => {
  toast.error(message, {
    style: {
      background: "#ff78ac",
      color: "#fff",
      textAlign: "center",
    },
  });
};
