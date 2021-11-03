import OldMessage from "./OldMessage";

const MessageHistory = ({ messageHistory }) => {
  // // const messageHistory = props.messageHistory;
  // // const listItems = messageHistory.map((message) => (
  // //   <OldMessage key={message.toString()} value={message} />
  // // ));
  // console.log(messageHistory);
  // return <ul></ul>;

  const listItems = messageHistory.map((message, id) => (
    <li key={message.toString() + id}>{message}</li>
  ));
  return <ul>{listItems}</ul>;
};

export default MessageHistory;
