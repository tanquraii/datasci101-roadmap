import { Accordion } from "./components/Accordion";
import { Topic } from "./components/Topic";
import roadmapData from './texts/roadmap.json';
import { Head } from "./components/Head";
import { Description } from "./components/Description";

export default function App() {
  return (
    <div className="bg-[#1E1E1E]">
      <div className="sticky top-0 z-50 bg-[#1E1E1E]/50 backdrop-blur-md text-white p-4 border-b border-[#251E38]/50">
        <Head />
      </div>
      <div>
        <Description />
      </div>
      <div className="min-h-screen bg-[#1E1E1E] text-white p-6 flex flex-col items-center justify-center">
        <main className="max-w-3xl mx-auto space-y-4">
          {roadmapData.levels.map((level) => (
            <Accordion
              key={level.id}
              level={level.level}
              description={level.description}
              topics={level.topics.map((topic) => (
                <Topic
                  key={topic.id}
                  title={topic.title}
                  description={topic.description}
                  author={'author' in topic ? topic.author : []}
                  urls={topic.urls}
                />
              ))}
            />
          ))}
        </main>
      </div>
    </div>
  );
}