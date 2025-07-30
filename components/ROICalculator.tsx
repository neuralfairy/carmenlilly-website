"use client"

import { useState } from "react"
import { Calculator, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function ROICalculator() {
  const [monthlyLeads, setMonthlyLeads] = useState(100)
  const [conversionRate, setConversionRate] = useState(5)
  const [avgDealValue, setAvgDealValue] = useState(5000)
  const [currentCostPerLead, setCurrentCostPerLead] = useState(50)

  const calculateROI = () => {
    const currentMonthlyRevenue = monthlyLeads * (conversionRate / 100) * avgDealValue
    const currentMonthlyCost = monthlyLeads * currentCostPerLead

    // With Carmenlilly (assuming 3x more leads, 60% cost reduction, 45% conversion improvement)
    const newLeads = monthlyLeads * 3
    const newConversionRate = conversionRate * 1.45
    const newCostPerLead = currentCostPerLead * 0.4

    const newMonthlyRevenue = newLeads * (newConversionRate / 100) * avgDealValue
    const newMonthlyCost = newLeads * newCostPerLead

    const revenueIncrease = newMonthlyRevenue - currentMonthlyRevenue
    const costSavings = currentMonthlyCost - newMonthlyCost
    const totalBenefit = revenueIncrease + costSavings

    return {
      currentRevenue: currentMonthlyRevenue,
      newRevenue: newMonthlyRevenue,
      revenueIncrease,
      costSavings,
      totalBenefit,
      roi: (totalBenefit / newMonthlyCost) * 100,
    }
  }

  const results = calculateROI()

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Calculate Your Potential ROI</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how much revenue you could generate and costs you could save with our platform
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Calculator Inputs */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Calculator className="h-6 w-6 text-emerald-600" />
              <h3 className="text-xl font-semibold text-gray-900">Your Current Metrics</h3>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Monthly Leads Generated</label>
                <input
                  type="number"
                  value={monthlyLeads}
                  onChange={(e) => setMonthlyLeads(Number(e.target.value))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Conversion Rate (%)</label>
                <input
                  type="number"
                  value={conversionRate}
                  onChange={(e) => setConversionRate(Number(e.target.value))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Average Deal Value ($)</label>
                <input
                  type="number"
                  value={avgDealValue}
                  onChange={(e) => setAvgDealValue(Number(e.target.value))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Current Cost Per Lead ($)</label>
                <input
                  type="number"
                  value={currentCostPerLead}
                  onChange={(e) => setCurrentCostPerLead(Number(e.target.value))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <TrendingUp className="h-6 w-6 text-emerald-600" />
              <h3 className="text-xl font-semibold text-gray-900">Your Potential Results</h3>
            </div>

            <div className="space-y-6">
              <div className="bg-emerald-50 rounded-lg p-4">
                <div className="text-sm text-emerald-700 font-medium mb-1">Monthly Revenue Increase</div>
                <div className="text-2xl font-bold text-emerald-600">${results.revenueIncrease.toLocaleString()}</div>
              </div>

              <div className="bg-blue-50 rounded-lg p-4">
                <div className="text-sm text-blue-700 font-medium mb-1">Monthly Cost Savings</div>
                <div className="text-2xl font-bold text-blue-600">${results.costSavings.toLocaleString()}</div>
              </div>

              <div className="bg-purple-50 rounded-lg p-4">
                <div className="text-sm text-purple-700 font-medium mb-1">Total Monthly Benefit</div>
                <div className="text-2xl font-bold text-purple-600">${results.totalBenefit.toLocaleString()}</div>
              </div>

              <div className="bg-gray-900 rounded-lg p-4">
                <div className="text-sm text-gray-300 font-medium mb-1">ROI</div>
                <div className="text-3xl font-bold text-white">{results.roi.toFixed(0)}%</div>
              </div>
            </div>

            <div className="mt-8 space-y-3">
              <Link
                href="https://salescentri.com/solutions/use-case-navigator/recommendations"
                className="btn-primary w-full block text-center"
              >
                Get Custom Recommendations
              </Link>
              <Link
                href="https://salescentri.com/get-started/book-demo"
                className="btn-secondary w-full block text-center"
              >
                Schedule Strategy Call
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
