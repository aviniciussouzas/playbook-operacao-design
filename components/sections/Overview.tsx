import { Target, Compass, Zap } from 'lucide-react';

export function Overview() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-3xl font-semibold mb-3 text-slate-900">Visão Geral da Operação</h2>
        <p className="text-lg text-slate-600">
          Como organizamos e escalonamos o trabalho criativo com clareza e previsibilidade
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6">
          <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-4">
            <Compass className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-semibold text-slate-900 mb-2">Design como Direção</h3>
          <p className="text-sm text-slate-700">
            Design não é só execução. É direção criativa, construção de identidade e diferencial competitivo para cada conta.
          </p>
        </div>

        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
          <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mb-4">
            <Target className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-semibold text-slate-900 mb-2">Clareza Operacional</h3>
          <p className="text-sm text-slate-700">
            Este playbook define como trabalhamos: processos, decisões, rituais e métricas. Menos ambiguidade, mais autonomia.
          </p>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
          <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center mb-4">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-semibold text-slate-900 mb-2">Qualidade Sustentável</h3>
          <p className="text-sm text-slate-700">
            Previsibilidade não mata criatividade. Governança criativa garante qualidade consistente sem burnout.
          </p>
        </div>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-8">
        <h3 className="font-semibold text-slate-900 mb-6">Objetivo deste Playbook</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-sm font-medium text-slate-900 mb-3">O que você vai encontrar aqui</h4>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 mt-0.5">✓</span>
                <span>Como as contas são classificadas e por quê</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 mt-0.5">✓</span>
                <span>Como designers são alocados por tipo de conta</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 mt-0.5">✓</span>
                <span>Fluxo padrão de trabalho da entrada à entrega</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 mt-0.5">✓</span>
                <span>O que você pode decidir sozinho, o que precisa alinhar</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 mt-0.5">✓</span>
                <span>Rituais para manter o time sincronizado</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 mt-0.5">✓</span>
                <span>Métricas simples para aprender e melhorar</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-medium text-slate-900 mb-3">O que este playbook não é</h4>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-slate-400 mt-0.5">×</span>
                <span>Manual de design ou guia de marca</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-400 mt-0.5">×</span>
                <span>Sistema de vigilância ou microgestão</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-400 mt-0.5">×</span>
                <span>Burocracia sem propósito</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-400 mt-0.5">×</span>
                <span>Regra imutável — é um documento vivo</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white rounded-xl p-8">
        <h3 className="font-semibold mb-4">Contexto da Operação</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <div className="text-3xl font-bold mb-1">13</div>
            <div className="text-sm text-slate-300">Designers no time</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-1">17</div>
            <div className="text-sm text-slate-300">Contas ativas</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-1">~1.3</div>
            <div className="text-sm text-slate-300">Contas por designer</div>
          </div>
        </div>
      </div>
    </div>
  );
}
