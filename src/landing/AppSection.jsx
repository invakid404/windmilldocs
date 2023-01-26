import React from 'react';
import LandingSection from '../landing/LandingSection';
import FeatureCard from '../landing/FeatureCard';

const data = [
	{
		title: 'Polyglott',
		description: 'Python, Typescript, Go, Bash scripts with any dependencies'
	},

	{
		title: 'Scalable',
		description: 'Run them at scale on your infra or ours'
	},
	{
		title: 'Open source',
		description:
			'Open-source alternative to Airplane, Superblocks, Retool. Simplified Temporal, Airflow.'
	},
	{
		title: 'Schedules',
		description:
			'Trigger scripts and flows using cron-like schedules, or via an automatically generated webhook'
	}
];

export default function FlowSection() {
	return (
		<LandingSection bgClass="bg-gradient-to-br from-white to-orange-50">
			<div className="flex flex-col gap-8 justify-center">
				<div className="flex-row gap-2 flex items-center">
					<h1 className="tracking-tight leading-tight text-left font-bold text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-orange-600 items-center">
						Apps
					</h1>
					<span className=" inline-flex items-center rounded-full bg-yellow-100 px-3 py-0.5 text-sm font-medium text-yellow-800">
						Alpha
					</span>
				</div>

				<span className="text-lg text-gray-600 max-w-3xl">
					Build complex Flows from atomic apps. Automatically trigger apps and Flow from webhooks, a
					schedule, watching for events, or slack.
				</span>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
					<div className="grid grid-cols-1 sm:grid-cols-2  gap-4">
						{data.map((item) => (
							<FeatureCard title={item.title} color="orange">
								{item.description}
							</FeatureCard>
						))}
					</div>
					<div class="flex flex-col w-full gap-2 italic">
						<img className="border-2 h-full rounded-xl" src="homescreen.png"></img>
						<span className="text-gray-500 text-center w-full text-sm">Lorem ipsum</span>
					</div>
				</div>
				<div className="flex">
					<button
						type="button"
						className="inline-flex items-center rounded-md border border-transparent bg-orange-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
					>
						Explore apps on the Hub
					</button>
				</div>
			</div>
		</LandingSection>
	);
}