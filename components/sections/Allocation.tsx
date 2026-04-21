import { Users, Star, TrendingUp, AlertTriangle } from 'lucide-react';

export function Allocation() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-3xl font-semibold mb-3 text-slate-900">Estrutura de Alocação de Designers</h2>
        <p className="text-lg text-slate-600">
          Como distribuímos talento entre contas para garantir qualidade sem sobrecarga
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white border-2 border-slate-200 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">Modelo de Dedicação Exclusiva</h3>
          </div>
          <p className="text-sm text-slate-700 mb-4">
            Designer alocado 100% para uma única conta. Ideal para contas Tipo A.
          </p>
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-2">
              <span className="text-emerald-600 mt-0.5">+</span>
              <span className="text-slate-700">Imersão total no contexto da conta</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-emerald-600 mt-0.5">+</span>
              <span className="text-slate-700">Consistência criativa máxima</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-emerald-600 mt-0.5">+</span>
              <span className="text-slate-700">Relacionamento forte com cliente</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-slate-400 mt-0.5">−</span>
              <span className="text-slate-600">Menos exposição a outros projetos</span>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-slate-200 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">Modelo de Dedicação Compartilhada</h3>
          </div>
          <p className="text-sm text-slate-700 mb-4">
            Designer atende 2-3 contas simultaneamente. Ideal para contas Tipo B e C.
          </p>
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-2">
              <span className="text-emerald-600 mt-0.5">+</span>
              <span className="text-slate-700">Maior variedade de projetos</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-emerald-600 mt-0.5">+</span>
              <span className="text-slate-700">Melhor uso da capacidade do time</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-emerald-600 mt-0.5">+</span>
              <span className="text-slate-700">Cross-pollination de ideias</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-slate-400 mt-0.5">−</span>
              <span className="text-slate-600">Requer gestão de contexto e prioridades</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 rounded-xl p-8">
        <h3 className="font-semibold text-slate-900 mb-6">Critérios de Senioridade por Tipo de Conta</h3>
        
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <Star className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-slate-900 mb-2">Contas Tipo A → Designer Senior / Lead</h4>
              <p className="text-sm text-slate-700 mb-3">
                Requer autonomia para decisões criativas estratégicas, capacidade de construir sistemas visuais complexos e liderar direção criativa.
              </p>
              <div className="bg-white rounded-lg p-4 text-sm text-slate-700">
                <strong className="text-slate-900">Competências necessárias:</strong> Pensamento sistêmico, gestão de complexidade, autonomia criativa, relacionamento com stakeholders C-level
              </div>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-slate-900 mb-2">Contas Tipo B → Designer Pleno / Senior</h4>
              <p className="text-sm text-slate-700 mb-3">
                Requer capacidade de aplicar sistemas existentes com consistência, velocidade de produção e autonomia tática.
              </p>
              <div className="bg-white rounded-lg p-4 text-sm text-slate-700">
                <strong className="text-slate-900">Competências necessárias:</strong> Produtividade, atenção a padrões, adaptação criativa dentro de sistemas, gestão de tempo
              </div>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-slate-900 mb-2">Contas Tipo C → Designer Júnior / Pleno</h4>
              <p className="text-sm text-slate-700 mb-3">
                Requer execução precisa de briefings claros, velocidade e capacidade de seguir diretrizes estabelecidas.
              </p>
              <div className="bg-white rounded-lg p-4 text-sm text-slate-700">
                <strong className="text-slate-900">Competências necessárias:</strong> Execução técnica, follow-through, comunicação clara, gestão de expectativas
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-8">
        <div className="flex items-start gap-4 mb-6">
          <AlertTriangle className="w-6 h-6 text-amber-700 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold text-slate-900 mb-2">Limites de Carga para Evitar Sobrecarga</h3>
            <p className="text-sm text-slate-700 mb-4">
              Estes limites são diretrizes para manter qualidade e sustentabilidade. Exceções devem ser temporárias e acordadas.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-5">
            <div className="text-2xl font-bold text-purple-600 mb-1">1</div>
            <div className="text-sm font-medium text-slate-900 mb-2">Conta Tipo A</div>
            <div className="text-xs text-slate-600">Máximo por designer (dedicação exclusiva recomendada)</div>
          </div>

          <div className="bg-white rounded-lg p-5">
            <div className="text-2xl font-bold text-blue-600 mb-1">2-3</div>
            <div className="text-sm font-medium text-slate-900 mb-2">Contas Tipo B</div>
            <div className="text-xs text-slate-600">Máximo por designer em dedicação compartilhada</div>
          </div>

          <div className="bg-white rounded-lg p-5">
            <div className="text-2xl font-bold text-green-600 mb-1">4-5</div>
            <div className="text-sm font-medium text-slate-900 mb-2">Contas Tipo C</div>
            <div className="text-xs text-slate-600">Máximo por designer (demanda baixa e pontual)</div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-amber-200">
          <h4 className="text-sm font-semibold text-slate-900 mb-3">Sinais de Sobrecarga (monitorar sempre)</h4>
          <div className="grid md:grid-cols-2 gap-3 text-sm">
            <div className="flex items-start gap-2">
              <span className="text-amber-700 mt-0.5">⚠</span>
              <span className="text-slate-700">Aumento de retrabalho ou erros</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-amber-700 mt-0.5">⚠</span>
              <span className="text-slate-700">Prazo de entrega consistentemente atrasado</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-amber-700 mt-0.5">⚠</span>
              <span className="text-slate-700">Designer relatando burnout ou frustração</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-amber-700 mt-0.5">⚠</span>
              <span className="text-slate-700">Qualidade criativa visivelmente reduzida</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-800 text-white rounded-xl p-8">
        <h3 className="font-semibold mb-4">Exemplo de Distribuição (13 designers, 17 contas)</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <div className="text-sm text-slate-400 mb-2">Contas Tipo A</div>
            <div className="text-2xl font-bold mb-1">5 contas</div>
            <div className="text-sm text-slate-300">5 designers dedicados (1:1)</div>
          </div>
          <div>
            <div className="text-sm text-slate-400 mb-2">Contas Tipo B</div>
            <div className="text-2xl font-bold mb-1">8 contas</div>
            <div className="text-sm text-slate-300">5 designers compartilhados (~1.6 contas cada)</div>
          </div>
          <div>
            <div className="text-sm text-slate-400 mb-2">Contas Tipo C</div>
            <div className="text-2xl font-bold mb-1">4 contas</div>
            <div className="text-sm text-slate-300">3 designers compartilhados (~1.3 contas cada)</div>
          </div>
        </div>
      </div>
    </div>
  );
}
