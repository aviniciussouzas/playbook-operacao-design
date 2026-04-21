import { ArrowRight, Inbox, Filter, Pencil, Eye, CheckCircle, Send } from 'lucide-react';

export function Pipeline() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-3xl font-semibold mb-3 text-slate-900">Pipeline Padrão de Trabalho</h2>
        <p className="text-lg text-slate-600">
          Fluxo único que se adapta à complexidade de cada tipo de conta. Previsibilidade sem rigidez.
        </p>
      </div>

      <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-8">
        <h3 className="font-semibold text-slate-900 mb-6 text-center">Fluxo Universal de Trabalho</h3>
        
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-8">
          <div className="flex-1 bg-white border-2 border-slate-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center">
                <Inbox className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-slate-900">1. Entrada</h4>
              </div>
            </div>
            <p className="text-sm text-slate-700">Recebimento da demanda e briefing inicial</p>
          </div>

          <ArrowRight className="w-6 h-6 text-slate-400 hidden md:block" />

          <div className="flex-1 bg-white border-2 border-slate-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                <Filter className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-slate-900">2. Triagem</h4>
              </div>
            </div>
            <p className="text-sm text-slate-700">Classificação, priorização e validação</p>
          </div>

          <ArrowRight className="w-6 h-6 text-slate-400 hidden md:block" />

          <div className="flex-1 bg-white border-2 border-slate-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                <Pencil className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-slate-900">3. Produção</h4>
              </div>
            </div>
            <p className="text-sm text-slate-700">Criação e desenvolvimento criativo</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="flex-1 bg-white border-2 border-slate-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Eye className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-slate-900">4. Revisão</h4>
              </div>
            </div>
            <p className="text-sm text-slate-700">Revisão interna e ajustes</p>
          </div>

          <ArrowRight className="w-6 h-6 text-slate-400 hidden md:block" />

          <div className="flex-1 bg-white border-2 border-slate-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-slate-900">5. Aprovação</h4>
              </div>
            </div>
            <p className="text-sm text-slate-700">Validação do cliente</p>
          </div>

          <ArrowRight className="w-6 h-6 text-slate-400 hidden md:block" />

          <div className="flex-1 bg-white border-2 border-slate-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center">
                <Send className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-slate-900">6. Entrega</h4>
              </div>
            </div>
            <p className="text-sm text-slate-700">Finalização e arquivamento</p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="font-semibold text-slate-900">Variação de Profundidade por Tipo de Conta</h3>

        {/* Tipo A */}
        <div className="bg-purple-50 border-2 border-purple-300 rounded-xl p-6">
          <h4 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
            Pipeline para Contas Tipo A
          </h4>
          <div className="space-y-4">
            <div>
              <div className="text-sm font-medium text-slate-900 mb-1">1. Entrada</div>
              <p className="text-sm text-slate-700">Briefing completo + reunião de kick-off presencial/online. Entendimento profundo do contexto estratégico e escopo.</p>
            </div>
            <div>
              <div className="text-sm font-medium text-slate-900 mb-1">2. Triagem</div>
              <p className="text-sm text-slate-700">Análise de complexidade + solicitação dos materiais do cliente + alocação de designer dedicado.</p>
            </div>
            <div>
              <div className="text-sm font-medium text-slate-900 mb-1">3. Produção</div>
              <p className="text-sm text-slate-700">Exploração criativa → apresentação de conceitos → iteração aprovada → desenvolvimento do projeto (criação das peças). Múltiplas rodadas esperadas.</p>
            </div>
            <div>
              <div className="text-sm font-medium text-slate-900 mb-1">4. Revisão</div>
              <p className="text-sm text-slate-700">Revisão com direção criativa + validação técnica rápida (checklist).</p>
            </div>
            <div>
              <div className="text-sm font-medium text-slate-900 mb-1">5. Aprovação</div>
              <p className="text-sm text-slate-700">Apresentação ao cliente (se possível) + rodadas de ajuste + sign-off formal.</p>
            </div>
            <div>
              <div className="text-sm font-medium text-slate-900 mb-1">6. Entrega</div>
              <p className="text-sm text-slate-700">Entrega de assets finais +  upload no servidor da agência + finalização de arquivo.</p>
            </div>
          </div>
        </div>

        {/* Tipo B */}
        <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-6">
          <h4 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
            Pipeline para Contas Tipo B
          </h4>
          <div className="space-y-4">
            <div>
              <div className="text-sm font-medium text-slate-900 mb-1">1. Entrada</div>
              <p className="text-sm text-slate-700">Briefing via formulário padrão ou reunião rápida (15-30 min). Identidade visual já estabelecido.</p>
            </div>
            <div>
              <div className="text-sm font-medium text-slate-900 mb-1">2. Triagem</div>
              <p className="text-sm text-slate-700">Verificação de clareza do briefing + priorização + deadline.</p>
            </div>
            <div>
              <div className="text-sm font-medium text-slate-900 mb-1">3. Produção</div>
              <p className="text-sm text-slate-700">levantamento de referências → adaptação de peças → execução do plano de conteúdo. 1-2 rodadas.</p>
            </div>
            <div>
              <div className="text-sm font-medium text-slate-900 mb-1">4. Revisão</div>
              <p className="text-sm text-slate-700"> Validação técnica rápida (checklist) + revisão rápida com par ou direção criativa.</p>
            </div>
            <div>
              <div className="text-sm font-medium text-slate-900 mb-1">5. Aprovação</div>
              <p className="text-sm text-slate-700">Envio para cliente via canal acordado + uma rodada de ajuste se necessário.</p>
            </div>
            <div>
              <div className="text-sm font-medium text-slate-900 mb-1">6. Entrega</div>
              <p className="text-sm text-slate-700">Entrega de assets finais no formato solicitado + upload no servidor da agência.</p>
            </div>
          </div>
        </div>

        {/* Tipo C */}
        <div className="bg-green-50 border-2 border-green-300 rounded-xl p-6">
          <h4 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-green-600 rounded-full"></span>
            Pipeline para Contas Tipo C
          </h4>
          <div className="space-y-4">
            <div>
              <div className="text-sm font-medium text-slate-900 mb-1">1. Entrada</div>
              <p className="text-sm text-slate-700">Briefing rápido (email, mensagem ou formulário mínimo). Escopo bem definido.</p>
            </div>
            <div>
              <div className="text-sm font-medium text-slate-900 mb-1">2. Triagem</div>
              <p className="text-sm text-slate-700">Confirmação de escopo + priorização + confirmação do recebimento do briefing.</p>
            </div>
            <div>
              <div className="text-sm font-medium text-slate-900 mb-1">3. Produção</div>
              <p className="text-sm text-slate-700">Execução direta do briefing. Minimal viable design. 1 rodada.</p>
            </div>
            <div>
              <div className="text-sm font-medium text-slate-900 mb-1">4. Revisão</div>
              <p className="text-sm text-slate-700">Auto-revisão + validação técnica rápida (checklist).</p>
            </div>
            <div>
              <div className="text-sm font-medium text-slate-900 mb-1">5. Aprovação</div>
              <p className="text-sm text-slate-700">Envio direto. Ajuste pontual se necessário.</p>
            </div>
            <div>
              <div className="text-sm font-medium text-slate-900 mb-1">6. Entrega</div>
              <p className="text-sm text-slate-700">Entrega rápida no formato combinado +  upload no servidor da agência.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-800 text-white rounded-xl p-8">
        <h3 className="font-semibold mb-4">Princípios do Pipeline</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-sm font-semibold text-slate-200 mb-3">O que o pipeline garante</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">✓</span>
                <span>Nenhuma demanda entra sem briefing mínimo</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">✓</span>
                <span>Todas as entregas passam por revisão</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">✓</span>
                <span>Complexidade define profundidade, não etapas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">✓</span>
                <span>Previsibilidade para designer e cliente</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-200 mb-3">O que o pipeline NÃO é</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-slate-500 mt-0.5">×</span>
                <span>Burocracia — é estrutura intencional</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-500 mt-0.5">×</span>
                <span>Engessamento — adapta-se ao contexto</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-500 mt-0.5">×</span>
                <span>Checklist mecânico — requer julgamento</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-500 mt-0.5">×</span>
                <span>Substituto de comunicação — é facilitador</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
