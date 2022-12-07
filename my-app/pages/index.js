import Head from 'next/head'
import Image from 'next/image'
import React from "react"
import { Configuration, OpenAIApi } from "openai";
const config = new Configuration({ apiKey: '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' });
const openai = new OpenAIApi(config);

export default function Home() {
  const [input, changeINput] = React.useState()
  const [content, changeContent] = React.useState()
  
  function track(e) {
    changeINput(e.target.value)
  }

  const prompt = `
    Generate an essay based off of the following prompt:
    ${input}
    `;

    const generate = async (prompt) => {
        
        const completion = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: prompt,
            max_tokens: 1443
        });

        changeContent(completion.data.choices[0].text)
    }

  return (
    <div>
      <input type="text" onChange={track} />
      <button onClick={() => generate(prompt)}>Test</button>
      <p>{content}</p>
    </div>
  )
}
