import React from "react";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FAQ() {
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    return (
        <Box>
            <Container
                id="faq"
                sx={{
                    pt: { xs: 4, sm: 12 },
                    pb: { xs: 8, sm: 16 },
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: { xs: 3, sm: 6 },
                }}
            >
                <Typography
                    component="h2"
                    variant="h4"
                    color="text.primary"
                    sx={{
                        width: { sm: '100%', md: '60%' },
                        textAlign: { sm: 'left', md: 'center' },
                    }}
                >
                    常见问题
                </Typography>
                <Box sx={{ width: '100%' }}>
                    <Accordion
                        expanded={expanded === 'panel1'}
                        onChange={handleChange('panel1')}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1d-content"
                            id="panel1d-header"
                        >
                            <Typography component="h3" variant="subtitle2">
                                如果我有疑问或遇到问题，如何联系客户支持？
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography
                                variant="body2"
                                gutterBottom
                                sx={{ maxWidth: { sm: '100%', md: '70%' } }}
                            >
                                您可以通过发送电子邮件至
                                <Link> support@granint.com </Link>
                                或拨打我们的免费电话联系客户支持团队。
                                我们会及时为您提供帮助。
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        expanded={expanded === 'panel2'}
                        onChange={handleChange('panel2')}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2d-content"
                            id="panel2d-header"
                        >
                            <Typography component="h3" variant="subtitle2">
                                如果产品不符合我的期望，我可以退货吗？
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography
                                variant="body2"
                                gutterBottom
                                sx={{ maxWidth: { sm: '100%', md: '70%' } }}
                            >
                                当然可以！
                                我们提供无忧退换货政策。
                                如果您不完全满意，您可以在7天内退回商品，以获得全额退款或换货。
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        expanded={expanded === 'panel3'}
                        onChange={handleChange('panel3')}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3d-content"
                            id="panel3d-header"
                        >
                            <Typography component="h3" variant="subtitle2">
                                您的产品与市场上其他产品相比有何独特之处？
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography
                                variant="body2"
                                gutterBottom
                                sx={{ maxWidth: { sm: '100%', md: '70%' } }}
                            >
                                我们的产品以其高度适应性、耐用性和创新功能脱颖而出。
                                我们优先考虑用户满意度，并始终努力在各个方面超越期望。
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        expanded={expanded === 'panel4'}
                        onChange={handleChange('panel4')}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel4d-content"
                            id="panel4d-header"
                        >
                            <Typography component="h3" variant="subtitle2">
                                产品是否有保修期？保修范围包括哪些内容？
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography
                                variant="body2"
                                gutterBottom
                                sx={{ maxWidth: { sm: '100%', md: '70%' } }}
                            >
                                是的，我们的产品提供一年（特殊商品除外）的保修服务。
                                它涵盖了材料缺陷和工艺问题。
                                如果您遇到任何保修范围内的问题，请联系我们的客户支持寻求帮助。
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Box>
            </Container>
        </Box>
    )
}