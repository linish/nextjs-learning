import Hello from "@/app/components/hello";


export default function Home() {
  console.log("Home page - Server / Client Component");
  return (
      <>
        <h3 className="text-3xl">Welcome to NextJS</h3>
        <Hello />
      </>
  );
}
