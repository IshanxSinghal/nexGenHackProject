import { useState } from "react";
import { Send } from "lucide-react";
// import OpenAI from "openai";

// const client = new OpenAI({
//   apiKey: import.meta.env.VITE_OPENAI_API_KEY, // stored in .env
//   dangerouslyAllowBrowser: true, // ⚠️ only for hackathon/demo
// });

export default function EducationBot() {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "👋 Hello! I'm your Blood Donation Education Assistant. Ask me anything about myths, facts, and safety in blood donation.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const myths = [
    "Does donating blood weaken your immune system?",
    "Can I get infected with diseases from donating blood?",
    "Will I feel weak or dizzy after donating?",
    "How long does the donation process take?",
    "Do I need to follow a special diet before donating?",
    "Can donating blood help me lose weight?",
  ];

  const sendMessage = async (question) => {
    const userMsg = { sender: "user", text: question };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const completion = await client.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content:
              "You are a friendly educational assistant that ONLY answers about blood donation myths, facts, process, and safety. Keep answers short, clear, and encouraging.",
          },
          { role: "user", content: question },
        ],
      });

      const botReply = completion.choices[0].message.content;
      setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "⚠️ Error fetching AI response." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleSend = () => {
    if (input.trim()) {
      sendMessage(input);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold">
          Blood Donation Education Bot 🤖
        </h1>
        <p className="text-gray-600">
          Ask questions, bust myths, and learn about safe blood donation.
        </p>
      </header>

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chat Section */}
        <div className="lg:col-span-2 flex flex-col h-[70vh] rounded-2xl border bg-white shadow p-4">
          <div className="flex-1 overflow-y-auto space-y-3">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-3 rounded-xl max-w-[75%] ${
                  msg.sender === "bot"
                    ? "bg-gray-100 self-start"
                    : "bg-blue-500 text-white self-end"
                }`}
              >
                {msg.text}
              </div>
            ))}
            {loading && (
              <div className="p-3 rounded-xl max-w-[75%] bg-gray-100 self-start animate-pulse">
                Typing...
              </div>
            )}
          </div>

          <div className="mt-3 flex items-center gap-2">
            <input
              className="flex-1 border rounded-xl px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Ask about myths, safety, or process..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              disabled={loading}
              className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition disabled:opacity-50"
            >
              <Send size={18} />
            </button>
          </div>
        </div>

        {/* Quick Myths Section */}
        <div className="rounded-2xl border bg-white shadow p-4 space-y-3">
          <h2 className="text-lg font-semibold mb-2">💡 Common Myths</h2>
          {myths.map((m, i) => (
            <button
              key={i}
              onClick={() => sendMessage(m)}
              disabled={loading}
              className="w-full text-left border rounded-xl p-3 hover:bg-gray-50 flex justify-between items-center transition"
            >
              <span>{m}</span>
              <span className="text-sm font-medium text-blue-500">Ask</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
