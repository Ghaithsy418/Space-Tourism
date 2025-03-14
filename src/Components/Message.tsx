function Message({message}: {message: string}) {
  return (
    <div className="flex items-center justify-center mt-[45vh]">
      <h2 className="text-7xl text-gray-400">{message}</h2>
    </div>
  );
}

export default Message;
