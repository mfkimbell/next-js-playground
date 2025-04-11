enum direction {
  Incoming = 'incoming',
  Outgoing = 'outgoing',
}

export type Message = {
  conversationId: string;
  messageId: string;
  messageBody: string;
  sentDate: Date;
  direction: direction;
};
