import Icon from '@mdi/react';
import { mdiCashMinus, mdiCurrencyUsd, mdiSaleOutline, mdiClipboardListOutline } from '@mdi/js';

const AnalyticsSummaryTiles = () => {
  return (
    <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 my-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Card 1 - Purchase */}
        <div className="bg-indigo-50/30 p-5 rounded-xl border border-indigo-100 hover:border-indigo-200 transition-all duration-300 flex items-center gap-4 group">
          <div className="bg-indigo-100 p-3 rounded-xl group-hover:bg-indigo-200 transition-colors">
            <Icon 
              path={mdiClipboardListOutline} 
              size={1.1}
              className="text-indigo-600"
            />
          </div>
          <div>
            <p className="text-base font-medium text-gray-500 mb-1">Purchase Due</p>
            <h2 className="text-2xl font-semibold text-indigo-700">$307,144</h2>
          </div>
        </div>

        {/* Card 2 - Sales Due */}
        <div className="bg-emerald-50/30 p-5 rounded-xl border border-emerald-100 hover:border-emerald-200 transition-all duration-300 flex items-center gap-4 group">
          <div className="bg-emerald-100 p-3 rounded-xl group-hover:bg-emerald-200 transition-colors">
            <Icon 
              path={mdiSaleOutline} 
              size={1.1}
              className="text-emerald-600"
            />
          </div>
          <div>
            <p className="text-base font-medium text-gray-500 mb-1">Sales Due</p>
            <h2 className="text-2xl font-semibold text-emerald-700">$4,385</h2>
          </div>
        </div>

        {/* Card 3 - Sale Amount */}
        <div className="bg-cyan-50/30 p-5 rounded-xl border border-cyan-100 hover:border-cyan-200 transition-all duration-300 flex items-center gap-4 group">
          <div className="bg-cyan-100 p-3 rounded-xl group-hover:bg-cyan-200 transition-colors">
            <Icon 
              path={mdiCurrencyUsd} 
              size={1.1}
              className="text-cyan-600"
            />
          </div>
          <div>
            <p className="text-base font-medium text-gray-500 mb-1 text-left">Sale Amount</p>
            <h2 className="text-2xl font-semibold text-cyan-700 text-left">$385,656.5</h2>
          </div>
        </div>

        {/* Card 4 - Expense */}
        <div className="bg-rose-50/30 p-5 rounded-xl border border-rose-100 hover:border-rose-200 transition-all duration-300 flex items-center gap-4 group">
          <div className="bg-rose-100 p-3 rounded-xl group-hover:bg-rose-200 transition-colors">
            <Icon 
              path={mdiCashMinus} 
              size={1.1}
              className="text-rose-600"
            />
          </div>
          <div>
            <p className="text-base font-medium text-gray-500 mb-1">Expense Amount</p>
            <h2 className="text-2xl font-semibold text-rose-700 text-left">$40,000</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsSummaryTiles;