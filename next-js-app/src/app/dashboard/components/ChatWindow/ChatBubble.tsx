type ChatBubbleProps = {
  message: string;
  incoming: boolean;
};

// export default function ChatBubble({ message, incoming }: ChatBubbleProps) {
//   return (
//     <div className="p-2">
//       {incoming ? (
//         <div className="rounded-4xl pr-2 pl-2 p-1 bg-blue-600 justify-self-end">{message} </div>
//       ) : (
//         <div className="rounded-4xl pr-2 pl-2 p-1  bg-gray-500 justify-self-start">{message}</div>
//       )}
//     </div>
//   );
// }

export default function ChatBubble({ message, incoming }: ChatBubbleProps) {
  return (
    <div className="p-2">
      <div
        className={`rounded-4xl pr-2 pl-2 p-1 ${incoming ? 'bg-gray-500 justify-self-start' : 'bg-blue-500 justify-self-end'} justify-self-end`}
      >
        {message}
      </div>
    </div>
  );
}
