import { Metadata } from "next";
import ImageExample from "@/components/examples/image-example";
import V0IntegrationExample from "@/components/examples/v0-integration-example";

export const metadata: Metadata = {
  title: "UI Examples",
  description: "Example components showcasing placeholder images and UI elements",
};

export default function ExamplesPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">UI Examples</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">V0.dev Integration</h2>
        <p className="mb-6 text-gray-700">
          Learn how to use V0.dev to enhance this project with AI-generated UI components.
        </p>
        <V0IntegrationExample />
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Image Placeholder Examples</h2>
        <p className="mb-6 text-gray-700">
          These examples demonstrate different ways to handle placeholder images in the application.
        </p>
        <ImageExample />
      </section>
    </main>
  );
} 