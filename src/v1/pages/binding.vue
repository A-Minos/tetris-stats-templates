<script lang="ts">
import User from "@/schemas/user";
import z from "zod";

const Data = z
	.object({
		platform: z.union([z.literal("TETR.IO"), z.literal("TOP"), z.literal("TOS")]),
		status: z.union([
			z.literal("error"),
			z.literal("success"),
			z.literal("unknown"),
			z.literal("unlink"),
			z.literal("unverified"),
		]),
		user: User,
		bot: User,
		command: z.string(),
	})
	.strict()
	.readonly();
</script>

<script lang="ts" setup>
import Avatar from "@/shared/components/avatar.vue";
import { isNonNullish } from "remeda";

const data = Data.parse(JSON.parse(document.querySelector<HTMLTemplateElement>("template#data")!.innerHTML.trim()));

const stateImage = asyncComputed(async () => {
	return await import(`@/v1/assets/images/status/${data.status}.svg?url`).then((module) => {
		return module.default;
	});
});
</script>

<template>
	<div id="content" class="binding">
		<div class="binding__container">
			<div class="binding__header">
				<Avatar :avatar="data.user.avatar" alt="玩家头像" class="binding__header__avatar" />
				<img v-if="isNonNullish(stateImage)" :src="stateImage" alt="状态" class="binding__header__state" />
				<Avatar :avatar="data.bot.avatar" alt="Bot 头像" class="binding__header__avatar" />
			</div>

			<div />

			<div v-if="data.status === 'success'" class="binding__content">
				<span>已将你在</span>
				<span class="binding__content__platform">&nbsp;{{ data.platform.toUpperCase() }}&nbsp;</span>
				<span>上的账号</span>

				<br />

				<span class="binding__content__user-name">&nbsp;{{ data.user.name }}&nbsp;</span>

				<br />

				<span>成功验证并绑定至</span>
				<span class="binding__content__bot-name">&nbsp;{{ data.bot.name }}</span>
				<span>.</span>
			</div>

			<div v-if="data.status === 'unverified'" class="binding__content">
				<span>已将你在</span>
				<span class="binding__content__platform">&nbsp;{{ data.platform.toUpperCase() }}&nbsp;</span>
				<span>上的账号</span>

				<br />

				<span class="binding__content__user-name">&nbsp;{{ data.user.name }}&nbsp;</span>

				<br />

				<span>绑定至</span>
				<span class="binding__content__bot-name">&nbsp;{{ data.bot.name }}</span>
				<span>, 但尚未通过验证.</span>
			</div>

			<div v-if="data.status === 'unknown'" class="binding__content">
				<span>已将你在</span>
				<span class="binding__content__platform">&nbsp;{{ data.platform.toUpperCase() }}&nbsp;</span>
				<span>上的账号</span>

				<br />

				<span class="binding__content__user-name">&nbsp;{{ data.user.name }}&nbsp;</span>

				<br />

				<span>绑定至</span>
				<span class="binding__content__bot-name">&nbsp;{{ data.bot.name }},</span>

				<br />

				<span>但是我们暂时无法验证您的身份.</span>
			</div>

			<div v-if="data.status === 'unlink'" class="binding__content">
				<span>已将你在</span>
				<span class="binding__content__platform">&nbsp;{{ data.platform.toUpperCase() }}&nbsp;</span>
				<span>上的账号</span>

				<br />

				<span class="binding__content__user-name">&nbsp;{{ data.user.name }}&nbsp;</span>

				<br />

				<span>成功从</span>
				<span class="binding__content__bot-name">&nbsp;{{ data.bot.name }}&nbsp;</span>
				<span>解绑.</span>
			</div>

			<div class="binding__footer">
				<span v-if="data.status === 'unknown' || data.status === 'success'">
					你可以输入 “{{ data.command }}” 命令来查找你在该平台上的统计数据.
				</span>

				<span v-if="data.status === 'unverified'">
					你可以输入 “{{ data.command }}” 命令来开始验证你的账号.
				</span>

				<span v-if="data.status === 'unlink'">
					你可以输入 “{{ data.command }}” 命令来重新将你在该平台上的账号绑定至&nbsp;{{ data.bot.name }}&nbsp;.
				</span>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
@import "@/v1/styles/main";
</style>

<style lang="scss" scoped>
@import "@/v1/styles/main";

.binding {
	@extend .font-template;
	@apply w-fit p-7.5 bg-[#f1f1f1];

	&__container {
		@apply flex flex-col gap-3.75;
	}

	&__header {
		@apply flex justify-center items-center gap-8;

		&__avatar {
			@apply w-24 h-24;
			@apply rounded-5;
			@apply drop-shadow-[0_0.6875rem_1.4375rem_#00000038];
		}

		&__state {
			@apply w-32 h-14;
			@apply rounded-5;
		}
	}

	&__content {
		@apply text-6.25 text-center fw-350;

		&__bot-name,
		&__symbol {
			@apply fw-400;
		}

		&__platform,
		&__user-name {
			@apply fw-extrabold;
		}
	}

	&__footer {
		@apply text-[#52525c] text-center;
	}
}
</style>
