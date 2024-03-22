import { useState } from 'react';
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from '@material-tailwind/react';

export default function UnderlineTabs({ data }) {
    const [activeTab, setActiveTab] = useState(data[0].value);

    return (
        <Tabs value={activeTab} className="mt-5">
            <TabsHeader
                className="rounded-lg m-auto max-w-[960px] border-light-surface-container-high border-b bg-light-surface-container-highest"
                indicatorProps={{
                    className: 'bg-transparent border-b-2 border-light-primary shadow-none rounded-none',
                }}
            >
                {data.map(({ label, value }) => (
                    <Tab
                        key={value}
                        value={value}
                        onClick={() => setActiveTab(value)}
                        className={activeTab === value ? 'text-light-primary' : 'text-light-on-surface-variant'}
                    >
                        {label}
                    </Tab>
                ))}
            </TabsHeader>
            <TabsBody>
                {data.map(({ value, desc }) => (
                    <TabPanel key={value} value={value}>
                        {desc}
                    </TabPanel>
                ))}
            </TabsBody>
        </Tabs>
    );
}
