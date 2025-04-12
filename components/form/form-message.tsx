export type Message =
  | { success: string }
  | { error: string }
  | { message: string };

export function FormMessage({ message }: { message: Message }) {
  const isSuccess = "success" in message;
  const isError = "error" in message;
  const isMessage = "message" in message;

  return (
    <div className="flex flex-col gap-2 w-full max-w-md text-sm">
      {isSuccess && (
        <div className="text-foreground border-l-2 border-foreground px-4">
          {message.success}
        </div>
      )}
      {isError && (
        <div className="text-destructive-foreground border-l-2 border-destructive-foreground px-4">
          {message.error}
        </div>
      )}
      {isMessage && (
        <div className="text-foreground border-l-2 px-4">{message.message}</div>
      )}
    </div>
  );
}
