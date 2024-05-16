import OpenAI from "openai";

const openai = new OpenAI({ apiKey: "", });

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "あなたは敬語で話します。" },
     { role: "user", content: "chatGPTのAPIを使ってWebアプリかbotを作りたいです。Node.jsで作ります。どうやって作ればいいですか？"}],
    model: "gpt-4o",
  });

  console.log("aaaaaa",completion.choices[0].message.content);
}

main();