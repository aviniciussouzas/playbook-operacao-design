import { FileText, CheckSquare } from 'lucide-react';

export function Briefing() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-3xl font-semibold mb-3 text-slate-900">Briefing como Contrato</h2>
        <p className="text-lg text-slate-600">
          Nenhum trabalho começa sem briefing. É o contrato mínimo que protege designer e cliente.
        </p>
      </div>

      <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-300 rounded-xl p-8">
        <div className="flex items-start gap-4 mb-6">
          <FileText className="w-8 h-8 text-amber-700 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-slate-900 mb-2">Por que o briefing é um contrato?</h3>
            <p className="text-sm text-slate-700">
              Porque define escopo, expectativa, contexto e critérios de sucesso. Sem briefing, não há acordo claro — e sem acordo, há retrabalho.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4">
            <div className="text-sm font-medium text-slate-900 mb-1">Protege o designer</div>
            <p className="text-xs text-slate-600">Clareza sobre o que será entregue e por quê</p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <div className="text-sm font-medium text-slate-900 mb-1">Protege o cliente</div>
            <p className="text-xs text-slate-600">Garante que a entrega atende o que foi pedido</p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <div className="text-sm font-medium text-slate-900 mb-1">Protege o processo</div>
            <p className="text-xs text-slate-600">Reduz ambiguidade e retrabalho desnecessário</p>
          </div>
        </div>
      </div>

      <div className="bg-white border-2 border-slate-200 rounded-xl p-8">
        <h3 className="font-semibold text-slate-900 mb-6 flex items-center gap-2">
          <CheckSquare className="w-5 h-5 text-slate-700" />
          Modelo de Briefing Mínimo Obrigatório
        </h3>
        
        <div className="space-y-6">
          <div className="border-l-4 border-indigo-600 pl-6">
            <h4 className="font-semibold text-slate-900 mb-2">1. Contexto</h4>
            <p className="text-sm text-slate-700 mb-3">
              <strong>O que:</strong> Descreva o que precisa ser criado em 1-2 frases.
            </p>
            <div className="bg-slate-50 rounded-lg p-4 text-sm text-slate-700">
              <strong className="text-slate-900">Exemplo:</strong> "Criar 3 posts para Instagram anunciando o lançamento do produto X para público jovem urbano."
            </div>
          </div>

          <div className="border-l-4 border-purple-600 pl-6">
            <h4 className="font-semibold text-slate-900 mb-2">2. Objetivo</h4>
            <p className="text-sm text-slate-700 mb-3">
              <strong>Por que:</strong> Qual o objetivo deste trabalho? O que ele precisa resolver?
            </p>
            <div className="bg-slate-50 rounded-lg p-4 text-sm text-slate-700">
              <strong className="text-slate-900">Exemplo:</strong> "Gerar awareness e direcionar tráfego para landing page de pré-venda."
            </div>
          </div>

          <div className="border-l-4 border-blue-600 pl-6">
            <h4 className="font-semibold text-slate-900 mb-2">3. Público</h4>
            <p className="text-sm text-slate-700 mb-3">
              <strong>Para quem:</strong> Quem vai ver/usar este material? Qual o contexto?
            </p>
            <div className="bg-slate-50 rounded-lg p-4 text-sm text-slate-700">
              <strong className="text-slate-900">Exemplo:</strong> "Millennials e Gen Z, urbanos, com interesse em tecnologia e sustentabilidade."
            </div>
          </div>

          <div className="border-l-4 border-emerald-600 pl-6">
            <h4 className="font-semibold text-slate-900 mb-2">4. Entregável</h4>
            <p className="text-sm text-slate-700 mb-3">
              <strong>O que vai ser entregue:</strong> Formato, quantidade, dimensões, especificações.
            </p>
            <div className="bg-slate-50 rounded-lg p-4 text-sm text-slate-700">
              <strong className="text-slate-900">Exemplo:</strong> "3 posts estáticos, 1080x1080px, formato PNG, texto editável separado."
            </div>
          </div>

          <div className="border-l-4 border-teal-600 pl-6">
            <h4 className="font-semibold text-slate-900 mb-2">5. Prazo</h4>
            <p className="text-sm text-slate-700 mb-3">
              <strong>Quando:</strong> Data de entrega final e se há milestones intermediários.
            </p>
            <div className="bg-slate-50 rounded-lg p-4 text-sm text-slate-700">
              <strong className="text-slate-900">Exemplo:</strong> "Primeira versão em 3 dias úteis. Entrega final após 1 rodada de ajustes, 5 dias totais."
            </div>
          </div>

          <div className="border-l-4 border-amber-600 pl-6">
            <h4 className="font-semibold text-slate-900 mb-2">6. Referências (se houver)</h4>
            <p className="text-sm text-slate-700 mb-3">
              <strong>Inspiração/Direção:</strong> Exemplos visuais, referências, moodboard, ou indicação de tom.
            </p>
            <div className="bg-slate-50 rounded-lg p-4 text-sm text-slate-700">
              <strong className="text-slate-900">Exemplo:</strong> "Tom clean e minimalista. Ver referências anexadas de marcas similares."
            </div>
          </div>

          <div className="border-l-4 border-rose-600 pl-6">
            <h4 className="font-semibold text-slate-900 mb-2">7. Restrições / Informações Críticas</h4>
            <p className="text-sm text-slate-700 mb-3">
              <strong>O que não pode faltar:</strong> Elementos obrigatórios, limitações técnicas, aprovações necessárias.
            </p>
            <div className="bg-slate-50 rounded-lg p-4 text-sm text-slate-700">
              <strong className="text-slate-900">Exemplo:</strong> "Logo da marca deve aparecer em todos os posts. Evitar cores quentes."
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
          <h4 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
            <span className="text-emerald-600">✓</span>
            Briefing Bom
          </h4>
          <ul className="space-y-2 text-sm text-slate-700">
            <li className="flex items-start gap-2">
              <span className="text-emerald-600 mt-0.5">•</span>
              <span>Responde todas as 7 perguntas essenciais</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-600 mt-0.5">•</span>
              <span>É claro e objetivo, sem ambiguidade</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-600 mt-0.5">•</span>
              <span>Inclui referências visuais quando relevante</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-600 mt-0.5">•</span>
              <span>Define critério de sucesso ("como saberei que está pronto?")</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-600 mt-0.5">•</span>
              <span>Prazo é realista e acordado</span>
            </li>
          </ul>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-xl p-6">
          <h4 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
            <span className="text-red-600">×</span>
            Briefing Ruim
          </h4>
          <ul className="space-y-2 text-sm text-slate-700">
            <li className="flex items-start gap-2">
              <span className="text-red-600 mt-0.5">•</span>
              <span>"Faz algo bonito" — sem contexto ou objetivo</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 mt-0.5">•</span>
              <span>"Você já sabe como é" — assume conhecimento não compartilhado</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 mt-0.5">•</span>
              <span>"Urgente!" sem contexto de por que a urgência</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 mt-0.5">•</span>
              <span>Escopo vago ou aberto à interpretação</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 mt-0.5">•</span>
              <span>Falta definição de entregável ou formato</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-slate-800 text-white rounded-xl p-8">
        <h3 className="font-semibold mb-4">Regra de Ouro</h3>
        <div className="text-lg mb-4">
          Se o briefing não está completo, o designer tem autonomia (e obrigação) de pedir mais informações antes de começar.
        </div>
        <p className="text-sm text-slate-300">
          Começar sem briefing claro não é agilidade — é risco. Proteção mútua é profissionalismo, não burocracia.
        </p>
      </div>
    </div>
  );
}
