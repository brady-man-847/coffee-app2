export default function useSendSlack() {
  const SLACK_WEBHOOK_URL = process.env.NEXT_PUBLIC_SLACK_WEBHOOK_URL;

  const sendSlack = async (message: string) => {
    if (!SLACK_WEBHOOK_URL) {
      return;
    }

    await fetch(SLACK_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        username: 'mcafe',
        icon_emoji: ':coffee:',
        text: message,
      }),
    });
  };

  return {
    sendSlack,
  };
}
