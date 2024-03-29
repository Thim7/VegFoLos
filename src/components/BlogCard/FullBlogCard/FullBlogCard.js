import { Card, CardHeader, CardBody, CardFooter, Avatar, IconButton } from '@material-tailwind/react';
import { BookMarkOutlineIcon } from '~/components/Icons';

export default function FullBlogCard({ data }) {
    return (
        <Card className="max-w-[352px] h-[334px] overflow-hidden bg-light-surface-container-lowest p-2 space-y-2">
            <CardHeader floated={false} shadow={false} color="transparent" className="m-0 h-40">
                <img src={data.img} alt={data.title} className="w-full h-auto object-cover" />
            </CardHeader>
            <CardBody className="p-0">
                <div className="flex-col space-y-2">
                    <h1 className="text-[22px] font-medium text-light-on-surface leading-7">{data.title}</h1>
                    <p className="font-normal text-sm text-light-on-surface-variant">{data.desc}</p>
                </div>
            </CardBody>
            <CardFooter className="flex items-center justify-between p-2 bg-light-surface-container-low rounded-lg">
                <div className="flex items-center space-x-2">
                    <Avatar
                        size="sm"
                        variant="circular"
                        alt={data.avatarName}
                        src={data.avatar}
                        className="border-2 border-white hover:z-10"
                    />
                    <div className="flex-col space-y-0">
                        <h1 className="text-sm font-medium text-light-on-surface">{data.avatarName}</h1>
                        <p className="text-xs font-normal text-light-on-surface-variant">{data.postDate}</p>
                    </div>
                </div>
                <IconButton variant="text" className="rounded-full">
                    <BookMarkOutlineIcon />
                </IconButton>
            </CardFooter>
        </Card>
    );
}
