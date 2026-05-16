import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";

const ToastContext = createContext(null);

function Toast({ toast, onClose }) {
  const isSuccess = toast.type === "success";

  return (
    <div
      className={`pointer-events-auto flex w-[min(92vw,430px)] items-center gap-4 rounded-2xl border-4 bg-white px-5 py-4 shadow-xl ${
        isSuccess ? "border-green-400" : "border-red-400"
      }`}
    >
      <div
        className={`flex h-9 w-9 shrink-0 items-center justify-center text-2xl ${
          isSuccess ? "text-green-500" : "text-red-500"
        }`}
      >
        {isSuccess ? <FaCheck /> : <FaTimes />}
      </div>

      <div className="min-w-0 flex-1">
        <p
          className={`text-base font-extrabold uppercase ${
            isSuccess ? "text-green-500" : "text-red-500"
          }`}
        >
          {isSuccess ? "Success!" : "Error!"}
        </p>
        <p className="break-words text-sm text-gray-600">{toast.message}</p>
      </div>

      <button
        type="button"
        onClick={() => onClose(toast.id)}
        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs text-white ${
          isSuccess ? "bg-green-400" : "bg-red-400"
        }`}
        aria-label="Close message"
      >
        <FaTimes />
      </button>
    </div>
  );
}

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const showToast = useCallback((message, type = "success") => {
    const id = crypto.randomUUID();

    setToasts((currentToasts) => [
      ...currentToasts,
      {
        id,
        type,
        message,
      },
    ]);

    setTimeout(() => {
      setToasts((currentToasts) => currentToasts.filter((toast) => toast.id !== id));
    }, 3500);
  }, []);

  const closeToast = useCallback((id) => {
    setToasts((currentToasts) => currentToasts.filter((toast) => toast.id !== id));
  }, []);

  const value = useMemo(
    () => ({
      showSuccess: (message) => showToast(message, "success"),
      showError: (message) => showToast(message, "error"),
    }),
    [showToast]
  );

  return (
    <ToastContext.Provider value={value}>
      {children}

      <div className="pointer-events-none fixed left-1/2 top-24 z-[9999] flex -translate-x-1/2 flex-col gap-4">
        {toasts.map((toast) => (
          <Toast key={toast.id} toast={toast} onClose={closeToast} />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used inside ToastProvider");
  }

  return context;
}
