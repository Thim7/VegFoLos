import { useState } from 'react';
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from '@material-tailwind/react';

export default function UnderlineTabs({ data, className: customClassName }) {
    const [activeTab, setActiveTab] = useState(data[0].value);

    var classes = 'mt-5 w-full relative';
    if (customClassName) {
        classes += ` ${customClassName}`;
    }
    return (
        <Tabs value={activeTab} className={classes}>
            <TabsHeader
                className="sticky h-10 top-32 rounded-lg border-light-surface-container-low border-b bg-light-surface-container-lowest"
                indicatorProps={{
                    className: 'bg-transparent border-b-2 border-light-primary shadow-none rounded-none',
                }}
            >
                {data.map(({ label, value }) => (
                    <Tab
                        key={value}
                        value={value}
                        onClick={() => setActiveTab(value)}
                        className={`${activeTab === value ? 'text-light-primary' : 'text-light-on-surface-variant'} transition-transform`}
                    >
                        {label}
                    </Tab>
                ))}
            </TabsHeader>
            <TabsBody className="w-full">
                {data.map(({ value, content }) => (
                    <TabPanel key={value} value={value}>
                        {content}
                    </TabPanel>
                ))}
            </TabsBody>
        </Tabs>
    );
}
