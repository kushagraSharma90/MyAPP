export default function Home() {
      return (
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Welcome to the Dashboard</h2>
          <p className="text-gray-600">This is the home page of your beautiful dashboard.</p>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {["Users", "Revenue", "Traffic"].map((item) => (
              <div key={item} className="bg-indigo-50 overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                        />
                      </svg>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">{item}</dt>
                        <dd className="text-lg font-medium text-gray-900">10,000</dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    }
    
    