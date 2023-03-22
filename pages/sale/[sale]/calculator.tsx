import PageLayout from "@/layouts/PageLayout";
import Simulation from "@/components/Simulation/Simulation";
import Result from "@/components/Simulation/Result";

export default function Calculator() {
  return (
    <PageLayout>
      <div className="bg-gray-50">
        <div className="container mx-auto flex justify-center py-12">
          <div className="w-full md:w-5/6">
            <div className="flex flex-col mb-6">
              <h2 className="text-xl font-semibold">Kalkulator Simulasi KPR</h2>
              <span className="text-sm text-gray-400">Simulasikan KPR Anda dengan cepat, aman dan jelas</span>
            </div>
            <div className="flex items-start gap-6 flex-col md:flex-row">
              <Simulation />
              <Result />
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}