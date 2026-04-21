import { Calendar, Users, Target, TrendingUp } from 'lucide-react';

export function Rituals() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-3xl font-semibold mb-3 text-slate-900">Rituais de Governança</h2>
        <p className="text-lg text-slate-600">
          Rituais regulares que mantêm o time alinhado, sem reunionite. Cada um tem propósito claro.
        </p>
      </div>

      <div className="bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 rounded-xl p-8">
        <h3 className="font-semibold text-slate-900 mb-4">Por que rituais importam</h3>
        <p className="text-slate-700 mb-6">
          Rituais criam previsibilidade, espaço de alinhamento e oportunidade de aprendizado coletivo. Não são "só mais reuniões" — são estrutura intencional.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4">
            <div className="text-sm font-medium text-slate-900 mb-1">Semanais</div>
            <p className="text-xs text-slate-600">Operação tática e priorização</p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <div className="text-sm font-medium text-slate-900 mb-1">Quinzenais</div>
            <p className="text-xs text-slate-600">Alinhamento criativo e feedback</p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <div className="text-sm font-medium text-slate-900 mb-1">Mensais</div>
            <p className="text-xs text-slate-600">Reflexão estratégica e ajustes</p>
          </div>
        </div>
      </div>

      {/* Rituais Semanais */}
      <div className="space-y-6">
        <h3 className="font-semibold text-slate-900 text-xl">Rituais Semanais</h3>

        <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-6">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-slate-900 mb-2">Planning Semanal</h4>
              <div className="flex gap-4 text-sm text-slate-600">
                <span>⏱ 30-45 min</span>
                <span>👥 Todo o time de design</span>
                <span>📅 Segunda-feira de manhã</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h5 className="text-sm font-semibold text-slate-900 mb-2">Objetivo</h5>
              <p className="text-sm text-slate-700">
                Alinhar prioridades da semana, identificar gargalos, redistribuir carga se necessário.
              </p>
            </div>

            <div>
              <h5 className="text-sm font-semibold text-slate-900 mb-2">Formato</h5>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">1.</span>
                  <span><strong>Check-in rápido</strong> — Como cada designer está? Algum bloqueio urgente? (5 min)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">2.</span>
                  <span><strong>Visão geral de entregas</strong> — O que cada um precisa entregar esta semana (15 min)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">3.</span>
                  <span><strong>Identificação de riscos</strong> — Alguma entrega em risco? Sobrecarga? (10 min)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">4.</span>
                  <span><strong>Redistribuição</strong> — Ajustar alocação se necessário (10 min)</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-100 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-slate-800">
                <strong>Output:</strong> Cada designer sabe exatamente suas prioridades da semana e a quem recorrer se precisar de ajuda.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-emerald-50 border-2 border-emerald-300 rounded-xl p-6">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <Target className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-slate-900 mb-2">Stand-up de Progresso (opcional)</h4>
              <div className="flex gap-4 text-sm text-slate-600">
                <span>⏱ 15 min</span>
                <span>👥 Por squad ou pod</span>
                <span>📅 Quarta-feira</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h5 className="text-sm font-semibold text-slate-900 mb-2">Objetivo</h5>
              <p className="text-sm text-slate-700">
                Check-in rápido de meio de semana. Identificar bloqueios antes que se tornem atrasos.
              </p>
            </div>

            <div>
              <h5 className="text-sm font-semibold text-slate-900 mb-2">Formato</h5>
              <p className="text-sm text-slate-700 mb-3">Cada designer responde brevemente:</p>
              <ul className="space-y-1.5 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-0.5">•</span>
                  <span>O que entreguei desde segunda?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-0.5">•</span>
                  <span>O que está em andamento?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-0.5">•</span>
                  <span>Algum bloqueio ou risco?</span>
                </li>
              </ul>
            </div>

            <div className="bg-emerald-100 border border-emerald-200 rounded-lg p-4">
              <p className="text-sm text-slate-800">
                <strong>Nota:</strong> Pode ser assíncrono (Slack/Teams) se o time preferir. O importante é ter visibilidade.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Rituais Quinzenais */}
      <div className="space-y-6">
        <h3 className="font-semibold text-slate-900 text-xl">Rituais Quinzenais</h3>

        <div className="bg-purple-50 border-2 border-purple-300 rounded-xl p-6">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-slate-900 mb-2">Critique Session</h4>
              <div className="flex gap-4 text-sm text-slate-600">
                <span>⏱ 60 min</span>
                <span>👥 Todo o time de design</span>
                <span>📅 Quinzenal, dia fixo</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h5 className="text-sm font-semibold text-slate-900 mb-2">Objetivo</h5>
              <p className="text-sm text-slate-700">
                Espaço para compartilhar trabalho em andamento ou finalizado, receber feedback estruturado, elevar padrão criativo do time.
              </p>
            </div>

            <div>
              <h5 className="text-sm font-semibold text-slate-900 mb-2">Formato</h5>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-0.5">1.</span>
                  <span><strong>Apresentação</strong> — Designer apresenta o trabalho (contexto, desafio, solução) — 10 min</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-0.5">2.</span>
                  <span><strong>Feedback estruturado</strong> — Time dá feedback baseado nos 4 princípios criativos — 15 min</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-0.5">3.</span>
                  <span><strong>Síntese</strong> — Designer resume aprendizados e próximos passos — 5 min</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-0.5">4.</span>
                  <span><strong>Repetir</strong> — 2 designers por sessão (60 min total)</span>
                </li>
              </ul>
            </div>

            <div className="bg-purple-100 border border-purple-200 rounded-lg p-4">
              <p className="text-sm text-slate-800">
                <strong>Regra de Ouro:</strong> Feedback construtivo, baseado em princípios, não em gosto pessoal. "Eu faria diferente" não é feedback útil.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Rituais Mensais */}
      <div className="space-y-6">
        <h3 className="font-semibold text-slate-900 text-xl">Rituais Mensais</h3>

        <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-6">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-slate-900 mb-2">Retrospectiva Operacional</h4>
              <div className="flex gap-4 text-sm text-slate-600">
                <span>⏱ 60-90 min</span>
                <span>👥 Todo o time + liderança</span>
                <span>📅 Última semana do mês</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h5 className="text-sm font-semibold text-slate-900 mb-2">Objetivo</h5>
              <p className="text-sm text-slate-700">
                Reflexão coletiva sobre o que funcionou, o que não funcionou, como melhorar. Espaço para ajustar processos e playbook.
              </p>
            </div>

            <div>
              <h5 className="text-sm font-semibold text-slate-900 mb-2">Formato</h5>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-0.5">1.</span>
                  <span><strong>Revisão de métricas</strong> — Volume, retrabalho, gargalos do mês (15 min)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-0.5">2.</span>
                  <span><strong>O que funcionou</strong> — Celebrar acertos e boas práticas (20 min)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-0.5">3.</span>
                  <span><strong>O que não funcionou</strong> — Identificar problemas sem culpa (20 min)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-0.5">4.</span>
                  <span><strong>Ações concretas</strong> — Definir 2-3 melhorias para implementar no próximo mês (20 min)</span>
                </li>
              </ul>
            </div>

            <div className="bg-amber-100 border border-amber-200 rounded-lg p-4">
              <p className="text-sm text-slate-800">
                <strong>Output:</strong> Lista de ações concretas para melhorar a operação no próximo mês. Não é catarse, é melhoria contínua.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-indigo-50 border-2 border-indigo-300 rounded-xl p-6">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <Target className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-slate-900 mb-2">Revisão de Portfolio</h4>
              <div className="flex gap-4 text-sm text-slate-600">
                <span>⏱ 45 min</span>
                <span>👥 Time + Direção Criativa</span>
                <span>📅 Mensal</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h5 className="text-sm font-semibold text-slate-900 mb-2">Objetivo</h5>
              <p className="text-sm text-slate-700">
                Revisar o melhor trabalho do mês, identificar cases para portfolio, celebrar qualidade criativa.
              </p>
            </div>

            <div>
              <h5 className="text-sm font-semibold text-slate-900 mb-2">Formato</h5>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 mt-0.5">1.</span>
                  <span><strong>Showcase</strong> — Cada designer compartilha 1-2 trabalhos que mais orgulham (30 min)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 mt-0.5">2.</span>
                  <span><strong>Seleção</strong> — Time vota nos melhores trabalhos para portfolio (10 min)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 mt-0.5">3.</span>
                  <span><strong>Celebração</strong> — Reconhecimento público dos destaques (5 min)</span>
                </li>
              </ul>
            </div>

            <div className="bg-indigo-100 border border-indigo-200 rounded-lg p-4">
              <p className="text-sm text-slate-800">
                <strong>Propósito:</strong> Manter o time motivado e construir consciência coletiva sobre o padrão de qualidade que buscamos.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-800 text-white rounded-xl p-8">
        <h3 className="font-semibold mb-4">Princípios dos Rituais</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-sm font-semibold text-slate-200 mb-3">O que torna um ritual efetivo</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">✓</span>
                <span>Propósito claro e específico</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">✓</span>
                <span>Duração respeitada (começar e terminar no horário)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">✓</span>
                <span>Formato conhecido e previsível</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">✓</span>
                <span>Participação ativa de todos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">✓</span>
                <span>Output concreto (decisão, ação, aprendizado)</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-200 mb-3">O que NÃO fazer nos rituais</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-slate-500 mt-0.5">×</span>
                <span>Deixar discussões sem conclusão</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-500 mt-0.5">×</span>
                <span>Ultrapassar o tempo sem acordar extensão</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-500 mt-0.5">×</span>
                <span>Transformar em sessão de reclamação sem ação</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-500 mt-0.5">×</span>
                <span>Permitir que alguns dominem toda conversa</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-500 mt-0.5">×</span>
                <span>Cancelar rituais sem comunicação prévia</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
