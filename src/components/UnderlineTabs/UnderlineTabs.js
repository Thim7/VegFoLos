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
                className="sticky h-10 top-32 rounded-lg border-light-surface-container-low dark:border-dark-surface-container-low border-b bg-light-surface-container-high dark:bg-dark-surface-container-high"
                indicatorProps={{
                    className:
                        'bg-transparent border-b-2 border-light-primary dark:border-dark-primary shadow-none rounded-none',
                }}
            >
                {data.map(({ label, value }) => (
                    <Tab
                        key={value}
                        value={value}
                        onClick={() => setActiveTab(value)}
                        className={`${activeTab === value ? 'text-light-primary dark:text-dark-primary font-medium' : 'text-light-on-surface-variant dark:text-dark-on-surface-variant'} transition-transform`}
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
