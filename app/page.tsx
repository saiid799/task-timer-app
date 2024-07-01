import TaskTimer from "@/components/TaskTimer/TaskTimer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-8 bg-background text-text">
      <h1 className="text-5xl font-header text-primary mb-12 tracking-wide">
        Task Timer
      </h1>
      <TaskTimer />
    </main>
  );
}
