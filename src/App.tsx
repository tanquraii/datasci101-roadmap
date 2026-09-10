import { Accordion } from "./components/Accordion";
import { Topic } from "./components/Topic";
import roadmapData from './texts/roadmap.json';

export default function App() {
  return (
    <div className="min-h-screen bg-[#1E1E1E] text-white p-6 font-sans">
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
                urls={topic.urls}
              />
            ))}
          />
        ))}
      </main>
    </div>
  );
}