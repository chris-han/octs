// Data structure for the knowledge graph
const graphData = {
    nodes: [
        // Value System Nodes (Core values, remain unchanged)
        { id: "openness", group: "values", label: "开放交流", description: "封闭系统熵增寂灭是必然；个体或组织如果成为封闭系统，熵增腐败也是必然的" },
        { id: "teamwork", group: "values", label: "团队协作", description: "世界不是孤立事件的集合，创新涌现的前提是组织构造的多样性和复杂性" },
        { id: "task_completion", group: "values", label: "任务达成", description: "组织和个体都是有目的主体，个体是实现组织目标的功能单元" },
        { id: "self_improvement", group: "values", label: "自主精进", description: "世界是变化的，而且是非线性变化，混沌和秩序对立统一、相互转化" },
        { id: "integrity", group: "values", label: "诚实守信", description: "技术进步减少了信息差，最大的风险往往来自能力不足或回避现实，或二者兼有" },
        
        // Positive Behavior Nodes
        { id: "knowledge_sharing", group: "behaviors", label: "建立个人知识系统", description: "通过系统化的知识管理和分享，促进组织学习和创新", type: "positive" },
        { id: "capability_monitoring", group: "behaviors", label: "设置能力基线报警", description: "建立关键能力指标监控机制，及时发现能力短板", type: "positive" },
        { id: "talent_flow", group: "behaviors", label: "建立人才流动机制", description: "促进组织内人才合理流动，优化资源配置和能力结构", type: "positive" },
        { id: "innovation_network", group: "behaviors", label: "促进人才多样性创新", description: "构建多元化的人才网络，激发创新思维和协作", type: "positive" },
        { id: "team_goal_alignment", group: "behaviors", label: "个体任务服从团队目标", description: "确保个人目标与团队整体目标保持一致性", type: "positive" },
        { id: "task_feedback", group: "behaviors", label: "建立任务结果反馈", description: "构建完整的任务执行反馈循环，促进持续改进", type: "positive" },
        { id: "info_system", group: "behaviors", label: "利用信息系统监测", description: "通过信息化手段实现任务进度和质量的实时监控", type: "positive" },
        { id: "feedback_channel", group: "behaviors", label: "适配反馈通道", description: "建立多元化的反馈渠道，确保信息传递的有效性", type: "positive" },
        { id: "value_selection", group: "behaviors", label: "价值观自主选择", description: "允许个体在组织框架下进行价值观的自主选择和实践", type: "positive" },
        { id: "rapid_iteration", group: "behaviors", label: "短期快速试错", description: "采用快速迭代方式验证想法，降低试错成本", type: "positive" },
        { id: "system_balance", group: "behaviors", label: "平衡自治与规则", description: "在个体自主性和组织规则之间寻找最优平衡点", type: "positive" },
        { id: "negotiation", group: "behaviors", label: "基于价值差异化谈判", description: "认识并尊重价值观差异，寻求共识与合作", type: "positive" },
        { id: "risk_monitoring", group: "behaviors", label: "诚实面对风险", description: "主动识别和应对风险，保持透明和诚实的态度", type: "positive" },
        { id: "trust_verification", group: "behaviors", label: "信任但要验证", description: "在维持基本信任的同时保持必要的验证机制", type: "positive" },

        // Negative Behavior Nodes
        { id: "closed_system", group: "behaviors", label: "封闭系统思维", description: "排斥外部交流和变革，导致系统效能逐渐衰减", type: "negative" },
        { id: "local_optimization", group: "behaviors", label: "局部利益优化", description: "过分关注局部效益，忽视整体目标的实现", type: "negative" },
        { id: "perfect_planning", group: "behaviors", label: "追求完美规划", description: "过度追求计划的完美性，影响执行效率和适应性", type: "negative" },
        { id: "information_asymmetry", group: "behaviors", label: "利用信息差", description: "通过控制信息流动获取不当利益，损害团队信任", type: "negative" },
        { id: "blind_trust", group: "behaviors", label: "盲目信任", description: "缺乏必要的验证机制，增加团队运营风险", type: "negative" },

        // Philosophy/Mindset Nodes
        { id: "growth_mindset", group: "philosophy", label: "成长型思维", description: "强调持续学习和发展的心态，优于固定型思维模式" , type: "positive" },
        { id: "holistic_optimization", group: "philosophy", label: "整体优化思维", description: "注重系统性思考，追求整体最优而非局部最优", type: "positive" },
        { id: "result_oriented", group: "philosophy", label: "结果导向思维", description: "关注实际成果而非仅关注过程执行", type: "positive" },
        { id: "experimental_mindset", group: "philosophy", label: "实验迭代思维", description: "倾向于快速试错和迭代，而非追求完美决策", type: "positive" },
        { id: "continuous_verification", group: "philosophy", label: "持续验证思维", description: "重视持续验证而非静态承诺，不断确认和调整", type: "positive" },

        // Negative Philosophy Nodes
        { id: "fixed_mindset", group: "philosophy", label: "静态思维", description: "固守现有认知，缺乏成长意愿", type: "negative" },
        { id: "local_mindset", group: "philosophy", label: "局部思维", description: "只关注局部利益，忽视整体效果", type: "negative" },
        { id: "process_oriented", group: "philosophy", label: "过程导向思维", description: "过分关注执行过程，忽视实际成果", type: "negative" },
        { id: "perfect_mindset", group: "philosophy", label: "完美主义思维", description: "过分追求完美规划，导致行动迟缓", type: "negative" },
        { id: "static_promise", group: "philosophy", label: "静态承诺思维", description: "依赖一次性承诺，缺乏持续验证", type: "negative" },
        
        // Additional nodes
        { 
            id: "team_capability_chain", 
            group: "behaviors", 
            label: "团队能力链条", 
            description: "团队执行力由个体能力链条构成，最弱环节决定整体上限",
            type: "positive" 
        },
        { 
            id: "capability_baseline", 
            group: "behaviors", 
            label: "能力基线管理", 
            description: "设置团队与个体的能力基线标准，确保整体执行力",
            type: "positive" 
        },
        { 
            id: "periodic_assessment", 
            group: "behaviors", 
            label: "定期考核调岗", 
            description: "通过定期评估和岗位调整维护团队能力结构",
            type: "positive" 
        },
        { 
            id: "weak_link_detection", 
            group: "behaviors", 
            label: "薄弱环节识别", 
            description: "识别并强化团队能力链条中的薄弱环节",
            type: "positive" 
        },
        { 
            id: "systematic_capability", 
            group: "philosophy", 
            label: "系统能力观", 
            description: "将团队视为有机整体，重视能力体系的系统性建设",
            type: "positive" 
        },
        { 
            id: "neglect_weakness", 
            group: "behaviors", 
            label: "忽视能力短板", 
            description: "忽视团队中的能力短板，导致整体效能受限",
            type: "negative" 
        },
        { 
            id: "static_assessment", 
            group: "behaviors", 
            label: "静态考核模式", 
            description: "采用固定的考核方式，缺乏动态调整机制",
            type: "negative" 
        },
        { 
            id: "wbs_decomposition", 
            group: "behaviors", 
            label: "模块化/专业化拆解WBS", 
            description: "将团队任务拆解为可分配的个体工作包",
            type: "positive" 
        },
        { 
            id: "individual_task_completion", 
            group: "behaviors", 
            label: "个体任务达成", 
            description: "个体完成分配的具体工作包",
            type: "positive" 
        },
        { 
            id: "team_task_completion", 
            group: "behaviors", 
            label: "团队任务达成", 
            description: "团队整体目标的完成状态",
            type: "positive" 
        },
        { 
            id: "process_optimization", 
            group: "behaviors", 
            label: "流程整体目标优化", 
            description: "从整体视角优化流程以达成团队目标",
            type: "positive" 
        },
        { 
            id: "global_optimization", 
            group: "behaviors", 
            label: "全局优化", 
            description: "追求团队整体效能的最优化",
            type: "positive" 
        }
    ],
    links: [
        // 1. Value-to-Value Relationships (Core structure)
        { source: "openness", target: "teamwork", value: 1, type: "positive", relationship: "value" },
        { source: "teamwork", target: "task_completion", value: 1, type: "positive", relationship: "value" },
        { source: "task_completion", target: "self_improvement", value: 1, type: "positive", relationship: "value" },
        { source: "self_improvement", target: "integrity", value: 1, type: "positive", relationship: "value" },
        { source: "integrity", target: "openness", value: 1, type: "positive", relationship: "value" },
        { source: "openness", target: "self_improvement", value: 1, type: "positive", relationship: "value" },
        { source: "teamwork", target: "integrity", value: 1, type: "positive", relationship: "value" },

        // 2. Direct Behavior to Value Links (Positive)
        { source: "knowledge_sharing", target: "openness", value: 1, type: "positive", relationship: "direct" },
        { source: "capability_monitoring", target: "openness", value: 1, type: "positive", relationship: "direct" },
        { source: "talent_flow", target: "openness", value: 1, type: "positive", relationship: "direct" },
        { source: "process_optimization", target: "teamwork", value: 1, type: "positive", relationship: "direct" },
        { source: "innovation_network", target: "teamwork", value: 1, type: "positive", relationship: "direct" },
        { source: "team_goal_alignment", target: "teamwork", value: 1, type: "positive", relationship: "direct" },
        { source: "task_feedback", target: "task_completion", value: 1, type: "positive", relationship: "direct" },
        { source: "info_system", target: "task_completion", value: 1, type: "positive", relationship: "direct" },
        { source: "feedback_channel", target: "task_completion", value: 1, type: "positive", relationship: "direct" },
        { source: "value_selection", target: "self_improvement", value: 1, type: "positive", relationship: "direct" },
        { source: "rapid_iteration", target: "self_improvement", value: 1, type: "positive", relationship: "direct" },
        { source: "system_balance", target: "self_improvement", value: 1, type: "positive", relationship: "direct" },
        { source: "negotiation", target: "integrity", value: 1, type: "positive", relationship: "direct" },
        { source: "risk_monitoring", target: "integrity", value: 1, type: "positive", relationship: "direct" },
        { source: "trust_verification", target: "integrity", value: 1, type: "positive", relationship: "direct" },

        // 3. Direct Behavior to Value Links (Negative)
        { source: "closed_system", target: "openness", value: -1, type: "negative", relationship: "direct" },
        { source: "local_optimization", target: "teamwork", value: -1, type: "negative", relationship: "direct" },
        { source: "perfect_planning", target: "self_improvement", value: -1, type: "negative", relationship: "direct" },
        { source: "information_asymmetry", target: "integrity", value: -1, type: "negative", relationship: "direct" },
        { source: "blind_trust", target: "integrity", value: -1, type: "negative", relationship: "direct" },

        // 4. Cross-Value Behavior Links
        { source: "knowledge_sharing", target: "teamwork", value: 1, type: "positive", relationship: "cross" },
        { source: "process_optimization", target: "openness", value: 1, type: "positive", relationship: "cross" },
        { source: "task_feedback", target: "integrity", value: 1, type: "positive", relationship: "cross" },
        { source: "talent_flow", target: "self_improvement", value: 1, type: "positive", relationship: "cross" },
        { source: "info_system", target: "openness", value: 1, type: "positive", relationship: "cross" },
        { source: "innovation_network", target: "self_improvement", value: 1, type: "positive", relationship: "cross" },
        { source: "system_balance", target: "teamwork", value: 1, type: "positive", relationship: "cross" },
        { source: "risk_monitoring", target: "openness", value: 1, type: "positive", relationship: "cross" },
        { source: "rapid_iteration", target: "task_completion", value: 1, type: "positive", relationship: "cross" },

        // 5. Negative Cross-Value Behavior Links
        { source: "local_optimization", target: "integrity", value: -1, type: "negative", relationship: "cross" },
        { source: "closed_system", target: "teamwork", value: -1, type: "negative", relationship: "cross" },
        { source: "blind_trust", target: "task_completion", value: -1, type: "negative", relationship: "cross" },
        { source: "perfect_planning", target: "teamwork", value: -1, type: "negative", relationship: "cross" },
        { source: "information_asymmetry", target: "openness", value: -1, type: "negative", relationship: "cross" },

        // 6. Philosophy to Values Links (New addition)
        { source: "growth_mindset", target: "openness", value: 1, type: "positive", relationship: "philosophy" },
        { source: "holistic_optimization", target: "teamwork", value: 1, type: "positive", relationship: "philosophy" },
        { source: "result_oriented", target: "task_completion", value: 1, type: "positive", relationship: "philosophy" },
        { source: "experimental_mindset", target: "self_improvement", value: 1, type: "positive", relationship: "philosophy" },
        { source: "continuous_verification", target: "integrity", value: 1, type: "positive", relationship: "philosophy" },

        // 7. Negative Philosophy to Values Links
        { source: "fixed_mindset", target: "openness", value: -1, type: "negative", relationship: "philosophy" },
        { source: "local_mindset", target: "teamwork", value: -1, type: "negative", relationship: "philosophy" },
        { source: "process_oriented", target: "task_completion", value: -1, type: "negative", relationship: "philosophy" },
        { source: "perfect_mindset", target: "self_improvement", value: -1, type: "negative", relationship: "philosophy" },
        { source: "static_promise", target: "integrity", value: -1, type: "negative", relationship: "philosophy" },

        // 8. Philosophy to Behavior Links
        { source: "growth_mindset", target: "knowledge_sharing", value: 1, type: "positive", relationship: "philosophy" },
        { source: "holistic_optimization", target: "team_goal_alignment", value: 1, type: "positive", relationship: "philosophy" },
        { source: "result_oriented", target: "task_feedback", value: 1, type: "positive", relationship: "philosophy" },
        { source: "experimental_mindset", target: "rapid_iteration", value: 1, type: "positive", relationship: "philosophy" },
        { source: "continuous_verification", target: "trust_verification", value: 1, type: "positive", relationship: "philosophy" },

        // 9. Cross-Philosophy Links (showing relationships between different mindsets)
        { source: "growth_mindset", target: "experimental_mindset", value: 1, type: "positive", relationship: "philosophy" },
        { source: "holistic_optimization", target: "result_oriented", value: 1, type: "positive", relationship: "philosophy" },
        { source: "experimental_mindset", target: "continuous_verification", value: 1, type: "positive", relationship: "philosophy" },
        { source: "result_oriented", target: "continuous_verification", value: 1, type: "positive", relationship: "philosophy" },
        // 核心价值观关联
        { source: "team_capability_chain", target: "teamwork", value: 1, type: "positive", relationship: "direct" },
        { source: "capability_baseline", target: "task_completion", value: 1, type: "positive", relationship: "direct" },
        { source: "periodic_assessment", target: "self_improvement", value: 1, type: "positive", relationship: "direct" },
        
        // 行为节点间的关联
        { source: "team_capability_chain", target: "capability_baseline", value: 1, type: "positive", relationship: "direct" },
        { source: "capability_baseline", target: "periodic_assessment", value: 1, type: "positive", relationship: "direct" },
        { source: "periodic_assessment", target: "weak_link_detection", value: 1, type: "positive", relationship: "direct" },
        { source: "weak_link_detection", target: "team_capability_chain", value: 1, type: "positive", relationship: "direct" },
        
        // 思维模式关联
        { source: "systematic_capability", target: "team_capability_chain", value: 1, type: "positive", relationship: "philosophy" },
        { source: "systematic_capability", target: "capability_baseline", value: 1, type: "positive", relationship: "philosophy" },
        { source: "holistic_optimization", target: "systematic_capability", value: 1, type: "positive", relationship: "philosophy" },
        
        // 消极行为的影响
        { source: "neglect_weakness", target: "team_capability_chain", value: -1, type: "negative", relationship: "direct" },
        { source: "static_assessment", target: "periodic_assessment", value: -1, type: "negative", relationship: "direct" },
        
        // 跨价值观的影响
        { source: "team_capability_chain", target: "task_completion", value: 1, type: "positive", relationship: "cross" },
        { source: "capability_baseline", target: "self_improvement", value: 1, type: "positive", relationship: "cross" },
        { source: "periodic_assessment", target: "teamwork", value: 1, type: "positive", relationship: "cross" },
        
        // 与现有节点的关联
        { source: "team_goal_alignment", target: "team_capability_chain", value: 1, type: "positive", relationship: "direct" },
        { source: "capability_monitoring", target: "capability_baseline", value: 1, type: "positive", relationship: "direct" },
        { source: "talent_flow", target: "periodic_assessment", value: 1, type: "positive", relationship: "direct" },
        
        // WBS分解相关
{ source: "wbs_decomposition", target: "individual_task_completion", value: 1, type: "positive", relationship: "direct" },
{ source: "wbs_decomposition", target: "team_task_completion", value: -1, type: "negative", relationship: "direct" },

// 个体任务达成相关
{ source: "individual_task_completion", target: "team_task_completion", value: 1, type: "positive", relationship: "direct" },
{ source: "individual_task_completion", target: "local_optimization", value: 1, type: "positive", relationship: "direct" },
{ source: "individual_task_completion", target: "global_optimization", value: -1, type: "negative", relationship: "direct" },

// 优化关系
{ source: "local_optimization", target: "global_optimization", value: -1, type: "negative", relationship: "direct" },
{ source: "process_optimization", target: "global_optimization", value: 1, type: "positive", relationship: "direct" },
{ source: "process_optimization", target: "team_task_completion", value: 1, type: "positive", relationship: "direct" },

// 与现有节点的关联
{ source: "team_goal_alignment", target: "process_optimization", value: 1, type: "positive", relationship: "direct" },
{ source: "holistic_optimization", target: "process_optimization", value: 1, type: "positive", relationship: "philosophy" },
{ source: "team_capability_chain", target: "process_optimization", value: 1, type: "positive", relationship: "direct" },

// 作为核心价值观的影响
{ source: "wbs_decomposition", target: "task_completion", value: 1, type: "positive", relationship: "direct" },
{ source: "process_optimization", target: "teamwork", value: 1, type: "positive", relationship: "direct" },


// 1. Process and Optimization Related
{ source: "process_optimization", target: "local_optimization", value: -1, type: "negative", relationship: "direct" }, // 流程整体优化抑制局部优化
{ source: "process_optimization", target: "team_capability_chain", value: 1, type: "positive", relationship: "direct" }, // 流程优化强化能力链条


// 2. WBS Decomposition Related
{ source: "wbs_decomposition", target: "capability_baseline", value: 1, type: "positive", relationship: "direct" }, // WBS分解有助于确定能力基线
{ source: "wbs_decomposition", target: "team_goal_alignment", value: -1, type: "negative", relationship: "cross" }, // WBS分解可能影响目标对齐

// 3. Individual to Team Performance
{ source: "individual_task_completion", target: "task_feedback", value: 1, type: "positive", relationship: "direct" }, // 个体任务完成需要反馈
{ source: "individual_task_completion", target: "info_system", value: 1, type: "positive", relationship: "direct" }, // 个体任务完成需要信息系统支持
{ source: "team_task_completion", target: "team_goal_alignment", value: 1, type: "positive", relationship: "direct" }, // 团队任务完成促进目标对齐

// 4. Philosophy and Mindset Links
{ source: "holistic_optimization", target: "team_task_completion", value: 1, type: "positive", relationship: "philosophy" }, // 整体优化思维促进团队任务完成
{ source: "result_oriented", target: "individual_task_completion", value: 1, type: "positive", relationship: "philosophy" }, // 结果导向促进个体任务完成
{ source: "fixed_mindset", target: "wbs_decomposition", value: 1, type: "positive", relationship: "philosophy" }, // 静态思维倾向于机械分解
{ source: "process_oriented", target: "wbs_decomposition", value: 1, type: "positive", relationship: "philosophy" }, // 过程导向促进WBS分解

// 5. Negative Impact Links
{ source: "perfect_planning", target: "wbs_decomposition", value: 1, type: "positive", relationship: "cross" }, // 完美主义促进过度分解
{ source: "static_assessment", target: "individual_task_completion", value: -1, type: "negative", relationship: "direct" }, // 静态考核影响个体任务达成
{ source: "local_mindset", target: "individual_task_completion", value: 1, type: "positive", relationship: "philosophy" }, // 局部思维促进个体任务关注

// 6. Cross-Value Impact
{ source: "global_optimization", target: "teamwork", value: 1, type: "positive", relationship: "cross" }, // 全局优化促进团队协作
{ source: "global_optimization", target: "task_completion", value: 1, type: "positive", relationship: "cross" }, // 全局优化促进整体任务完成
{ source: "wbs_decomposition", target: "self_improvement", value: -1, type: "negative", relationship: "cross" }, // WBS分解可能限制自主改进

{ 
    source: "team_task_completion", 
    target: "task_completion", 
    value: 1, 
    type: "positive", 
    relationship: "direct" 
}
    ]
};

// Configuration for the graph visualization
const config = {
    nodeRadius: 8,
    valueNodeRadius: 12,
    linkDistance: 80, // Reduced from 100
    charge: -300, // Reduced from -400 for less repulsion
    width: 1000,
    height: 600,
    zoom: {
        min: 0.5,
        max: 2,
        default: 0.8 // Default zoom level to show everything
    },
    colors: {
        values: "#3f51b5",
        positiveBehavior: "#4CAF50",
        negativeBehavior: "#f44336",
        linkPositive: "#4CAF50",
        linkNegative: "#f44336",
        highlight: "#FFC107",
        dimmed: "#cccccc",
        // Add dark theme colors
        dark: {
            values: "#757de8",
            positiveBehavior: "#66bb6a",
            negativeBehavior: "#ef5350",
            linkPositive: "#66bb6a",
            linkNegative: "#ef5350",
            highlight: "#ffd54f",
            dimmed: "#424242",
            background: "#121212",
            text: "#ffffff"
        }
    },

    linkDistance: 100, // 增加连接距离，让节点间距更大
    charge: -400, // 增加排斥力，避免节点重叠
    
    // 添加新的力导向配置
    forceConfig: {
        // 价值观节点之间的特殊引力
        valueForce: -800,
        // 行为节点与价值观节点之间的引力
        behaviorForce: -200
    },
    
    // 调整节点大小
    nodeRadius: 6, // 稍微减小普通节点
    valueNodeRadius: 15, // 增大价值观节点
    
    // 添加标签配置
    labels: {
        fontSize: {
            values: "14px",
            behaviors: "12px"
        },
        distance: {
            values: 20,
            behaviors: 15
        }
    }
};

// Add function to get theme-aware colors
function getThemeColor(colorKey) {
    const isDark = document.documentElement.classList.contains('dark');
    return isDark ? config.colors.dark[colorKey] || config.colors[colorKey] : config.colors[colorKey];
}

// Initialize the graph
function initGraph() {
    // Clear both the graph and controls
    d3.select("#culture-graph-controls").selectAll("*").remove();
    const svg = d3.select("#culture-graph")
        .attr("viewBox", [0, 0, config.width, config.height]);
    svg.selectAll("*").remove();

    // Create controls container with flexbox
    const controls = d3.select("#culture-graph-controls")
        .style("display", "flex")
        .style("gap", "1rem")
        .style("align-items", "center");

    // Add zoom controls
    const zoomControls = controls.append("div")
        .attr("class", "flex items-center gap-2");

    zoomControls.append("button")
        .attr("class", "zoom-btn bg-primary hover:bg-primary-dark text-white w-8 h-8 rounded-full shadow transition-colors flex items-center justify-center")
        .html('<i class="fas fa-minus"></i>')
        .on("click", () => zoomBy(0.8));

    zoomControls.append("button")
        .attr("class", "zoom-btn bg-primary hover:bg-primary-dark text-white w-8 h-8 rounded-full shadow transition-colors flex items-center justify-center")
        .html('<i class="fas fa-plus"></i>')
        .on("click", () => zoomBy(1.2));

    // Add reset view button
    const resetButton = controls.append("button")
        .attr("class", "reset-view-btn bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-full shadow transition-colors")
        .text("重置视图");

    // Create main container group
    const g = svg.append("g");

    // Add zoom behavior
    const zoom = d3.zoom()
        .scaleExtent([config.zoom.min, config.zoom.max])
        .on("zoom", (event) => {
            g.attr("transform", event.transform);
        });

    svg.call(zoom);

    // Create arrow markers with theme-aware colors
    g.append("defs").selectAll("marker")
        .data(["positive", "negative"])
        .enter().append("marker")
        .attr("id", d => `arrow-${d}`)
        .attr("viewBox", "0 -5 10 10")
        .attr("refX", 20)
        .attr("refY", 0)
        .attr("markerWidth", 6)
        .attr("markerHeight", 6)
        .attr("orient", "auto")
        .append("path")
        .attr("fill", d => d === "positive" ? getThemeColor("linkPositive") : getThemeColor("linkNegative"))
        .attr("d", "M0,-5L10,0L0,5");

    // Create the simulation with adjusted forces
    const simulation = d3.forceSimulation(graphData.nodes)
    .force("link", d3.forceLink(graphData.links)
        .id(d => d.id)
        .distance(d => {
            // 价值观节点之间的连接使用更大的距离
            if (d.source.group === "values" && d.target.group === "values") {
                return config.linkDistance * 1.5;
            }
            return config.linkDistance;
        }))
    .force("charge", d3.forceManyBody()
        .strength(d => {
            // 价值观节点有更强的排斥力
            if (d.group === "values") {
                return config.forceConfig.valueForce;
            }
            return config.charge;
        }))
    .force("center", d3.forceCenter(config.width / 2, config.height / 2))
    .force("collision", d3.forceCollide().radius(d => {
        // 价值观节点有更大的碰撞半径
        return (d.group === "values" ? config.valueNodeRadius : config.nodeRadius) * 2;
    }))
    .force("x", d3.forceX(config.width / 2).strength(0.1))
    .force("y", d3.forceY(config.height / 2).strength(0.1));

    // Create links
    const link = g.append("g")
        .selectAll("line")
        .data(graphData.links)
        .join("line")
        .attr("stroke", d => d.type === "positive" ? getThemeColor("linkPositive") : getThemeColor("linkNegative"))
        .attr("stroke-width", d => {
            switch(d.relationship) {
                case "value": return 3; // 价值观之间的连接更粗
                case "direct": return 2; // 直接影响普通粗细
                case "cross": return 1; // 跨价值观影响较细
                default: return 2;
            }
        })
        .attr("stroke-dasharray", d => {
            // 跨价值观的影响使用虚线
            return d.relationship === "cross" ? "3,3" : "none";
        })
        .attr("opacity", d => {
            // 价值观之间的连接更突出
            return d.relationship === "value" ? 0.8 : 0.6;
        })
        .attr("marker-end", d => `url(#arrow-${d.type})`);

    // Create nodes
    const node = g.append("g")
        .selectAll("circle")
        .data(graphData.nodes)
        .join("circle")
        .attr("r", d => d.group === "values" ? config.valueNodeRadius : config.nodeRadius)
        .attr("fill", d => {
            if (d.group === "values") return getThemeColor("values");
            return d.type === "positive" ? getThemeColor("positiveBehavior") : getThemeColor("negativeBehavior");
        });

    // Add labels
    const label = g.append("g")
        .selectAll("text")
        .data(graphData.nodes)
        .join("text")
        .text(d => d.label)
        .attr("font-size", "12px")
        .attr("dx", 12)
        .attr("dy", 4)
        .attr("class", "dark:text-white");

    // Function to reset view with proper scaling
    function resetView() {
        // Calculate the bounding box of the graph
        const bounds = g.node().getBBox();
        const dx = bounds.width;
        const dy = bounds.height;
        const x = bounds.x + dx / 2;
        const y = bounds.y + dy / 2;

        // Calculate the scale to fit the graph
        const scale = Math.min(
            config.width / dx,
            config.height / dy
        ) * config.zoom.default;

        // Calculate transform to center and scale the graph
        const transform = d3.zoomIdentity
            .translate(config.width / 2 - x * scale, config.height / 2 - y * scale)
            .scale(scale);

        // Apply the transform with transition
        svg.transition()
            .duration(750)
            .call(zoom.transform, transform);
    }

    // Function to zoom by a factor
    function zoomBy(factor) {
        svg.transition()
            .duration(300)
            .call(zoom.scaleBy, factor);
    }

    // Add reset button click handler
    resetButton.on("click", resetView);

    // Add hover interactions
    node.on("mouseover", handleNodeHover)
        .on("mouseout", handleNodeUnhover);

    // Add drag behavior
    node.call(d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended));

    // Update positions on simulation tick
    simulation.on("tick", () => {
        link
            .attr("x1", d => d.source.x)
            .attr("y1", d => d.source.y)
            .attr("x2", d => d.target.x)
            .attr("y2", d => d.target.y);

        node
            .attr("cx", d => d.x)
            .attr("cy", d => d.y);

        label
            .attr("x", d => d.x)
            .attr("y", d => d.y);
    });

    // Node hover handlers
    function handleNodeHover(event, d) {
        const connectedNodeIds = new Set();
        const relevantLinks = graphData.links.filter(link => {
            if (link.source.id === d.id || link.target.id === d.id) {
                connectedNodeIds.add(link.source.id);
                connectedNodeIds.add(link.target.id);
                return true;
            }
            return false;
        });

        link.attr("opacity", l => relevantLinks.includes(l) ? 1 : 0.1);
        node.attr("opacity", n => connectedNodeIds.has(n.id) ? 1 : 0.1);
        label.attr("opacity", n => connectedNodeIds.has(n.id) ? 1 : 0.1);

        updateDescription(d);
    }

    function handleNodeUnhover() {
        link.attr("opacity", 1);
        node.attr("opacity", 1);
        label.attr("opacity", 1);
        clearDescription();
    }

    // Drag handlers
    function dragstarted(event) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        event.subject.fx = event.subject.x;
        event.subject.fy = event.subject.y;
    }

    function dragged(event) {
        event.subject.fx = event.x;
        event.subject.fy = event.y;
    }

    function dragended(event) {
        if (!event.active) simulation.alphaTarget(0);
        event.subject.fx = null;
        event.subject.fy = null;
    }

    // Initial layout
    simulation
        .alpha(1)
        .restart();

    // Set initial view after a short delay to let the simulation settle
    setTimeout(resetView, 100);
}

// Keep the updateDescription and clearDescription functions as they are...

// Add theme change listener
document.addEventListener('themeChanged', initGraph);

// Update description panel
function updateDescription(node) {
    const descriptionEl = document.getElementById("graph-description");
    if (descriptionEl) {
        descriptionEl.innerHTML = `
            <h4 class="text-lg font-bold mb-2">${node.label}</h4>
            <p class="text-gray-600 dark:text-gray-300">${node.description}</p>
        `;
    }
}

function clearDescription() {
    const descriptionEl = document.getElementById("graph-description");
    if (descriptionEl) {
        descriptionEl.innerHTML = `
            <p class="text-gray-500">悬停在节点上查看详细信息</p>
        `;
    }
}

// Initialize graph when document is ready
document.addEventListener("DOMContentLoaded", initGraph);

// Handle window resize
window.addEventListener("resize", initGraph);